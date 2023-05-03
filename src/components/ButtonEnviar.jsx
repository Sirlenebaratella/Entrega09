
import styles from './ButtonEnviar.module.css'

function ButtonEnviar(props) {
    const {type, label} = props 
    return(
        <button className={styles.ButtonEnviar} type={type}>
            Enviar : {label}
        </button>
    )
}

export default ButtonEnviar