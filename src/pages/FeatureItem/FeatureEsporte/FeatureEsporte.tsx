import  styles  from './FeatureEsporte.module.css'

import imgDream from '../../../../public/pexels-nadi-lindsay-3078831.jpg'

export const FeatureEsporte = () => {

     return (
          <main className={styles.main}>
                    <header>
                         <div className={styles.logo}>

                         </div>
                         <div className={styles.nav}>
                              <span>Home</span>
                              <span>About</span>
                              <span>More</span>
                         </div>
                         <button>Connect us</button>
                    </header>
                    <div className={styles.img}></div>
          </main>    
     )
}