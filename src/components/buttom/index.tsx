import styles from './styles.module.css'

type Props = {
     txt: string
}

export const Buttom = ({txt}: Props) => {
     return(
          <button className={styles.contactUs}>{txt}</button>
     )
} 