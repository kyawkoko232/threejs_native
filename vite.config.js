import { defineConfig } from 'vite';
import { resolve } from 'path'
import path from 'path';
import glsl from 'vite-plugin-glsl';
export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server: {
        port: 8080,
        hot: true,
        host : true
      },
    build: {   
        rollupOptions: {
            input: {
                home : '/index.html',         
              },
    
        },
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },

    resolve: {
        alias: {
          '@node_modules': path.resolve(__dirname, 'node_modules/'),
          '@/' : path.resolve(__dirname, 'static/'),
        },
      },
      plugins : [
        glsl()
      ]
}