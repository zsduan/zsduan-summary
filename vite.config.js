/*
 * @Author: zs.duan
 * @Date: 2022-12-26 17:41:59
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-28 14:11:23
 * @FilePath: \vue2+js+eui+template\vite.config.js
 */
/* eslint-disable */
import legacyPlugin from '@vitejs/plugin-legacy';
import * as path from 'path';
import {
  createVuePlugin
} from 'vite-plugin-vue2';
// @see https://cn.vitejs.dev/config/
export default ({
  command,
  mode
}) => {
  let rollupOptions = {
    output: {
      manualChunks(id) { //设置包的大小
        if (id.includes('node_modules')) {
          return id
            .toString()
            .split('node_modules/')[1]
            .split('/')[0]
            .toString();
        }
      },
      chunkFileNames: (chunkInfo) => { //js单独文件
        const facadeModuleId = chunkInfo.facadeModuleId
          ? chunkInfo.facadeModuleId.split('/')
          : [];
        const fileName =
          facadeModuleId[facadeModuleId.length - 2] || '[name]';
        return `js/${fileName}/[name].[hash].js`;
      },
      assetFileNames: 'static/[ext]/name-[hash].[ext]',
      entryFileNames: 'static/js/[name]-[hash].js',
    }
  };


  let optimizeDeps = {};


  let alias = {
    '.git': path.resolve(__dirname, './.git'),
    'docker': path.resolve(__dirname, './docker'),
    'docs': path.resolve(__dirname, './docs'),
    'node_modules': path.resolve(__dirname, './node_modules'),
    'public': path.resolve(__dirname, './public'),
    'src': path.resolve(__dirname, './src'),
    '@': path.resolve(__dirname, 'src'),
  }

  let proxy = {}

  // todo 替换为原有变量
  let define = {
    'process.env.NODE_ENV': command === 'serve' ? '"development"' : '"production"',
  }

  let esbuild = {}

  return {
    base: './', // index.html文件所在位置
    root: './', // js导入的资源路径，src
    resolve: {
      alias,
    },
    define: define,
    server: {
      // 代理
      proxy,
      port: 8073,
    },
    build: {
      target: 'es2015',
      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
      manifest: false, // 是否产出maifest.json
      sourcemap: false, // 是否产出soucemap.json
      outDir: 'build', // 产出目录
      rollupOptions,
      chunkSizeWarningLimit:1500
    },
    esbuild,
    optimizeDeps,
    plugins: [
      createVuePlugin(), legacyPlugin({
        targets: ['Android > 39', 'Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15'],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },
      },
    },
  };
};