import { Logo } from '../../components/logoSvg/logo';
import styles from './ContactUs.module.css';

export const ContactUs = () => {
    
    
     return(
          <main className={styles.mainContact}>
               <div className={styles.bgUp}>
                    
               </div>
               <div className={styles.bgDown}></div>
               <div className={styles.container}>
                    <div className={styles.logoContact}>
                         <Logo/> <h1>Lorem</h1>
                    </div>
                    <div className={styles.generalInfoArea}>
                         <div className={styles.textInfo}></div>
                         <div className={styles.iconArea}></div>
                         <div className={styles.formArea}>
                              
                         </div>
                    </div>
               </div>
          </main>
    )
}