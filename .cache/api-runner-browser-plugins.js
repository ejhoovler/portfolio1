module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Portfolio","short_name":"portfolio","start_url":"/","display":"minimal-ui","icon":"src/images/01.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"0a3750e6fdb29fcd632e627e2fc34dde"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
