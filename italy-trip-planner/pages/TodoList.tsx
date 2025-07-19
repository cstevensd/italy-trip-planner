import React, { useState, useMemo } from 'react';
import { todoList as initialTodoList } from '../data/tripData';
import { TodoItemType } from '../types';
import { Icon } from '../components/Icon';
import FlightCountdown from '../components/FlightCountdown';

const getAssigneeColor = (name: string) => {
    // Consistent colors for the main travelers
    const travelerColors: { [key: string]: string } = {
        'Audrey': 'bg-pink-200 text-pink-800',
        'Grace': 'bg-purple-200 text-purple-800',
        'Tessy': 'bg-cyan-200 text-cyan-800',
    };
    return travelerColors[name] || 'bg-gray-200 text-gray-800'; // Fallback color
};

const TodoItem: React.FC<{ item: TodoItemType; onToggle: (id: number) => void; }> = ({ item, onToggle }) => (
    <li
        onClick={() => onToggle(item.id)}
        className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${item.completed ? 'bg-brand-success-bg text-brand-text-muted' : 'bg-brand-surface shadow-subtle hover:shadow-lifted hover:-translate-y-0.5'}`}
    >
        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 border-2 transition-colors flex-shrink-0 ${item.completed ? 'bg-brand-success border-brand-success' : 'border-brand-border'}`}>
            {item.completed && <Icon name="check" className="w-4 h-4 text-white" />}
        </div>
        <span className={`flex-grow font-medium ${item.completed ? 'line-through' : 'text-brand-text-main'}`}>{item.task}</span>
        <div className="flex -space-x-3 ml-4 flex-shrink-0">
            {item.assignees.map(name => (
                <div key={name} title={name} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white ${getAssigneeColor(name)}`}>
                    {name.charAt(0)}
                </div>
            ))}
        </div>
    </li>
);

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<TodoItemType[]>(initialTodoList);

    const handleToggle = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const progress = useMemo(() => {
        const completedCount = todos.filter(t => t.completed).length;
        return todos.length > 0 ? (completedCount / todos.length) * 100 : 0;
    }, [todos]);

    const incompleteTodos = todos.filter(t => !t.completed);
    const completedTodos = todos.filter(t => t.completed);

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-brand-primary mb-2">Pre-Trip To-Do List</h1>
            <p className="text-brand-text-muted">Check off tasks as you complete them.</p>

            <FlightCountdown />

            <div className="mb-8">
                <div className="flex justify-between mb-1">
                    <span className="text-base font-semibold text-brand-text-main">Progress</span>
                    <span className="text-sm font-semibold text-brand-accent">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-brand-border rounded-full h-2.5">
                    <div className="bg-brand-accent h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-brand-primary border-b border-brand-border pb-2 mb-4">Pending Tasks</h2>
                    {incompleteTodos.length > 0 ? (
                        <ul className="space-y-3">
                            {incompleteTodos.map(item => (
                                <TodoItem key={item.id} item={item} onToggle={handleToggle} />
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center py-8 px-4 bg-brand-surface rounded-xl shadow-subtle">
                          <p className="text-brand-text-muted font-semibold">All tasks completed. Well done!</p>
                        </div>
                    )}
                </div>

                {completedTodos.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-brand-primary border-b border-brand-border pb-2 mb-4">Completed</h2>
                        <ul className="space-y-3">
                            {completedTodos.map(item => (
                                <TodoItem key={item.id} item={item} onToggle={handleToggle} />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;