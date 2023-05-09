const xlsx = require('node-xlsx')
const fs = require('fs')
const path = require('path')
const { isFileExist } = require('cy-verify-downloads')

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      on('task', {
        isFileExist,
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      })

      config.baseUrl = config.env.baseUrl

      return config
    },
  },
  'chromeWebSecurity': false,
});
