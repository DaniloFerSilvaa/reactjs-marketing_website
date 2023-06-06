import styles from './styles.module.css'

type Props = {
     txt: string;
     onClick(): void;
     bgAndTxtColor: string;
}

export const Buttom = ({txt, onClick, bgAndTxtColor}: Props) => {
     let styleResult:string[] = bgAndTxtColor.split('/') 

     return(
          <button className={styles.contactUs} onClick={onClick} style={{backgroundColor: styleResult[0], color: styleResult[1]}}>{txt}</button>
     )
} 