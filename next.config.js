/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'] 
  },
};

module.exports = nextConfig;

//  domains: ['media.cnn.com', 'www.kob.com','nypost.com','a3.espncdn.com','cdn.vox-cdn.com','img.mlbstatic.com','www.hawkcentral.com','img.ksl.com','deadline.com','i0.wp.com','www.inquirer.com',"dtb3yzl0vm3pr.cloudfront.net","www.al.com",'i.ytimg.com',"a4.espncdn.com", 'media.formula1.com','a1.espncdn.com'],   
//domains:['ichef.bbci.co.uk', "m.files.bbci.co.uk", ],
  // 

// const {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD,
// } = require('next/constants')

// module.exports = (phase) => {
//   // Setting Phase
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER
//   const isProd = phase === PHASE_PRODUCTION_BUILD
//   console.log(`isDev:${isDev}  isProd:${isProd}`)

//   const reactStrictMode = true;

  // const images = {
  //    domains: [
  //     'media.cnn.com',
  //   ]
  // };




//   const env = {
//     SERVER_NAME: (() => {
//       if (isDev) return 'http://localhost:3000/'
//       if (isProd) return 'https://YOUR-DOMAIN-HERE.vercel.app/'
//     })(),
//     NEWS_API_KEY: process.env.NEWS_API_KEY,
//   }

//   // Next.config returns an object
//   return {
//     reactStrictMode,
//     images,
//     env,
//   }
// }