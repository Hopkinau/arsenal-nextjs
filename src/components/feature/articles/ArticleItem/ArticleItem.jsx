import styles from './ArticleItem.module.scss';
import Image from 'next/image';
import Card from '@/components/common/Card';
import ButtonLink from '@/components/common/ButtonLink';

function ArticleItem(props) {
    const imageUrl = props.urlToImage;
  return (
    <Card size="grid">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>
        <div className={styles.imageBox}>
          {imageUrl  && (<Image 
            src={imageUrl} 
            alt={props.description} 
            width={700}
            height={600}
          /> 
        )}
        </div>
        <div className={styles.articleContent}>
          <h2>{props.description}</h2>
        </div>
      </div>
      {/* CARD FOOTER */}
      <div className={styles.articleFooter}>
        <ButtonLink href={props.url} target="_blank">
          Link to Article
        </ButtonLink>
      </div>
    </Card>
  );
}

export default ArticleItem;