/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
      html: '<html lang="zh-cmn-Hant"></html>',
      userAgent: 'Agent/007',
    },
  };
  
  module.exports = config;