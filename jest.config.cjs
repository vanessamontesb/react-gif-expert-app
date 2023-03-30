/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
      html: '<html lang="zh-cmn-Hant"></html>',
      userAgent: 'Agent/007',
    },
  };
  
  module.exports = config;