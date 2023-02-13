
//guidancekerala.in  for collegesite test

module.exports = {
    publicRuntimeConfig: {
      APP_NAME: 'College Site Proj',
      API_DEVELOPMENT: 'http://localhost:8000/api',
      //API_DEVELOPMENT: 'http://bishopmoorecollege.ac.in/api',
      API_PRODUCTION: 'https://guidancekerala.in/api',
      DOMAIN_DEVELOPMENT: 'http://localhost:3000',
      DOMAIN_PRODUCTION:'https://guidancekerala.in',
      //UPLOADS_URL_DEVELOPMENT:'http://localhost:8020',
      UPLOADS_URL_DEVELOPMENT:'https://guidancekerala.in',
      //UPLOADS_URL_PRODUCTION:'http://localhost:8020',
      UPLOADS_URL_PRODUCTION:'https://guidancekerala.in',
      ERROR_IMAGE:'http://localhost:8000/public/assets/error-image.png',
      PRODUCTION: true
    },
    async redirects() {
      return [
        {
          source: '/admin',
          destination: '/admin/menuadmin',
          permanent: true,
        },
      ]
    },
  }


  //******************************************* */

  NODE_ENV=development
PORT=8000
CLIENT_URL=http://localhost:3000
#DATABASE_LOCAL='mongodb://bishopmooreadmin:adminBishop$2022@194.233.72.250:27017/bishopmoore'
DATABASE_LOCAL='mongodb://collegeadmin:AshalRaja2012@194.233.72.250:27017/collegesite'
#DATABASE_LOCAL='mongodb://collegeadmin:AshalRaja2012@194.163.155.160:27017/collegesite'
#DATABASE_LOCAL='mongodb://localhost:27017/blog_new'
JWT_SECRET=KDJHF7823RHIU3289FJ932I2G8FG239

