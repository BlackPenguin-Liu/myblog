import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/myblog/',
  publicPath: '/myblog/',
  themeConfig: {
    name: '黑企鹅',
    navs: [
      { title: '学习笔记', path: '/tech' },
      { title: '项目列表', path: '/project' },
    ],

  },
  plugins: ['dumi-plugin-color-chunk'],

});
