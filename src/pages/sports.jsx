import { Fragment } from "react"
import Head from "next/head"
import HeroSection from "@/components/layout/HeroSection/HeroSection"
import ArticlesList from "@/components/feature/articles/ArticlesList"

const SportsPage = (props) => {
  const {sportsArticles} = props;
  
  return (
    <Fragment>
   <Head>
        <title>Sport | Home</title>
        <meta 
        name='description' content='what kind of sport do you like!' />
      </Head>
      <HeroSection 
      title='World Sports'
      description='what are you going to watch today!'
      bgImage='/backgrounds/hero-news.jpeg'
      />
      {sportsArticles.length > 0 && <ArticlesList articles={sportsArticles}/> }
    </Fragment>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`https://api.unsplash.com/photos/random?query=soccer&count=10&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  const data = await response.json();
  const articles = data;


  return {
    props: {
      sportsArticles:articles
    },
    revalidate:60
  }
};
export default SportsPage;