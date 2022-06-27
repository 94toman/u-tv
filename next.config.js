// next.config.js
module.exports = {
    images: {
      domains: ['www.zaktv.cz', 'vysilani.zaktv.cz'],
    },
    async rewrites() {
      return {
        beforeFiles: [
          { 
            source: "/vysilani.jihoceskatelevize.cz/jtv/:path*", 
            destination: "https://vysilani.zaktv.cz/zak/:path*" 
          },
        ],
    }
  },
   /* async rewrites() {
      return [
        {
          source: '/vysilani.jihoceskatelevize.cz/jtv/:path*',
          destination: 'https://vysilani.zaktv.cz/zak/:path*',
        },
      ]
    }*/
  }