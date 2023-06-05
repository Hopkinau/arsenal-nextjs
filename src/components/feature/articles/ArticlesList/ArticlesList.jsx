import ArticleItem from '../ArticleItem/ArticleItem';
import Container from '@/components/common/Container/Container';

const ArticlesList = (props) => {
  const {articles} = props;
  
  return (
    <Container>
      {articles.map((article,index) => (
        <ArticleItem 
        key={index}
        id={article.id}
        urlToImage={article.urls.raw}
        url={article.links.html}
        description={article.alt_description}
        />
      ))}
      
    </Container>
  )
}

export default ArticlesList