import styles from './image.module.css';

function Image(props){
    return (
        <img className={styles.image} src={props.imageSource} />
    )
}

export default Image