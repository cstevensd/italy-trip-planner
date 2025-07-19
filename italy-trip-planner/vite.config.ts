import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'; // Make sure this is imported if you're using React
import { VitePWA } from 'vite-plugin-pwa'; // <-- ADD THIS LINE

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    plugins: [ // <-- ADD THIS 'plugins' ARRAY
      react(), // <-- Include your existing React plugin here
      VitePWA({ // <-- ADD THE VITE PWA PLUGIN CONFIGURATION
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'], // Include your assets
        manifest: {
          name: 'Italy Trip Planner', // Your app's full name
          short_name: 'Trip Planner', // A shorter name for the home screen
          description: 'Your personal Italy trip organizer', // A brief description
          theme_color: '#ffffff', // Your app's theme color
          icons: [
            {
              src: 'italy.png', // You'll need to create and place these icon files
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'italy.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'italy.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable', // For adaptive icons
            },
          ],
        },
      }),
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
