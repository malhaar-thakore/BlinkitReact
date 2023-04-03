import styles from './source.module.css';

function Source(props){
    const {sourceInnerContent} = props

    return (
        <div className={styles.source}>
            <strong>
                Sourced at {sourceInnerContent} AM
            </strong>
        </div>
    )
}

export default Source;