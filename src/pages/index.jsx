import {Fragment} from 'react'
import Head from 'next/head'
import HeroSection from '@/components/layout/HeroSection/HeroSection'


const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Sport World</title>
        <meta 
        name='description' content='What kind of sports do you like!' />
      </Head>
      <HeroSection 
      title='Arsenal'
      bgImage='/backgrounds/winner.jpeg'
      />
  
    </Fragment>
  )
}


// export const getStaticProps = async () => {

//   const response = await fetch(`${process.env.SERVER_NAME}/api/news`);
//   const data = await response.json();

//   console.log(data);


//   return {
//     props: {
//       articles: data
//     },
//     revalidate: 60 * 60
//   };
// };


export default HomePage