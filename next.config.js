const withPWA = require('next-pwa')

 module.exports = withPWA({
  future: {webpack5: true},
  pwa: {
    dest: 'public',
    disable: false,
    register: true,
    
    sw: 'service-worker.js',
    fallbacks: {
      
      document: '/fallback',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    }
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
})

