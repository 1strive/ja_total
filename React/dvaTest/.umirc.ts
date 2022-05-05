import { defineConfig } from 'umi';
// 路由配置文件
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  proxy: {
    '/api': {
      'target': 'http://public-api-v1.aspirantzhang.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});
