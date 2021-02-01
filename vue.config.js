const mode = process.env.VUE_APP_MODE
const env = process.env.NODE_ENV

console.log(">>>>>>>>start at:")
console.log(new Date().toLocaleString())
console.log(`Running mode is: ${mode}`)

let config = {}, configureWebpack = {}
if (mode === 'development' || mode === 'example') {
  config = {
    pages: {
      index: {
        entry: 'example/main.js',
        template: 'public/index.html',
        filename: 'index.html',
      }
    },
    outputDir: 'dist-example'
  };
  configureWebpack = {
    output: {
      filename: '[name].build.js'
    }
  }
} else if (mode === 'libs') {
  config = {
    outputDir: 'dist'
  },
  configureWebpack = {
    output: {
      library: 'VueFunny',
      libraryExport: 'default',
    }
  }
}

module.exports = {
  ...config,
  lintOnSave: env !== 'production',
  publicPath: '',
  productionSourceMap: false,
  css: {
    extract: false, // 无需抽取单独样式文件
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      }
    }
  },
  configureWebpack,
}