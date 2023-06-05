import { Fragment } from "react"
import Head from "next/head"
import HeroSection from "@/components/layout/HeroSection/HeroSection"
import ArticlesList from "@/components/feature/articles/ArticlesList"

const FoodPage = (props) => {
  const {foodArticles} = props;
  
  return (
    <Fragment>
   <Head>
        <title>Food | Home</title>
        <meta 
        name='description' content='what kind of food do you like!' />
      </Head>
      <HeroSection 
      title='World Food'
      description='what are you going to eat today!'
      bgImage='/backgrounds/hero-news.webp'
      />
      {foodArticles.length > 0 && <ArticlesList articles={foodArticles}/> }
    </Fragment>
  )
}

export const getServerSideProps = async ({ params: { topics }}) => {
  
  const response = await fetch(`https://api.unsplash.com/photos/random?query=${topics}&count=10&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  const data = await response.json();
  


  return {
    props: {
      foodArticles:data,
      topics
    },
    
  }
};
export default FoodPage;





