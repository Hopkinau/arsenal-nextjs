import styles from './HeroSection.module.scss'

const HeroSection = ({ title, description, bgImage}) => {
  return (
    <div 
    className={styles.showcase}
    style={{ backgroundImage:`url(${bgImage})`}}
     >
    <div className={styles.overlay}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    </div>
  )
}

export default HeroSection