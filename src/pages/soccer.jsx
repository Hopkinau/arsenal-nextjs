import { Fragment } from "react"
import Head from "next/head"
import HeroSection from "@/components/layout/HeroSection/HeroSection"
import ArticlesList from "@/components/feature/articles/ArticlesList"

const FoodPage = (props) => {
  const {foodArticles} = props;
  
  return (
    <Fragment>
   <Head>
        <title>Soccer | Home</title>
        <meta 
        name='description' content='Come and play soccer!' />
      </Head>
      <HeroSection 
      title='Soccer World'
      description='Join us today and have fun!'
      bgImage='/backgrounds/hero-code.jpeg'
      />
      {foodArticles.length > 0 && <ArticlesList articles={foodArticles}/> }
    </Fragment>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`https://api.unsplash.com/photos/random?query=soccer&count=10&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  const data = await response.json();
  const articles = data;


  return {
    props: {
      foodArticles:articles
    },
    revalidate:60
  }
};
export default FoodPage;