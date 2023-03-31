import styles from './source.module.css';

function Source(props){
    return (
        <div className={styles.source}>
            <strong>
                Sourced at {props.sourceInnerContent} AM
            </strong>
        </div>
    )
}

export default Source;