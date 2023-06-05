import styles from './styles.module.css'

type Props = {
     txt: string
     onClick(): void
}

export const Buttom = ({txt, onClick}: Props) => {
     return(
          <button className={styles.contactUs} onClick={onClick}>{txt}</button>
     )
} 