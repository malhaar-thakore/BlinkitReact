import styles from './image.module.css';

function Image(props){
    const {imageSource} = props;
    return (
        <img className={styles.image} src={imageSource} />
    )
}

export default Image