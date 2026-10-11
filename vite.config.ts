import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';
// base './' + HashRouter = works on GitHub Pages, Netlify or any static host with no extra config
export default defineConfig({base:'./',plugins:[react()]});
