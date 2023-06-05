import  styles  from './FeatureSonho.module.css'

import imgDream from '../../../../public/pexels-nadi-lindsay-3078831.jpg'
import { Logo } from '../../../components/logoSvg/logo'
import { Buttom } from '../../../components/buttom';
import { useNavigate } from 'react-router-dom';

const show:boolean = true;

export const FeatureSonho = () => {
     const navigate = useNavigate()

     const handlerClick = () => {
          navigate('/');
     }

     return (
          <main className={styles.main}>
               <div className={styles.logoArea}>
                    <div className={styles.logo}>
                         <Logo/>
                    </div>
                    <p>Fones do Nordeste</p>
               </div>
               { show &&
               <div className={styles.bodyArea}>
                    <div className={styles.infoArea}>
                         <span>Fone de Ouvido</span>
                         <span><i>Nordeste</i> A64</span>
                         <div className={styles.infoDescription}>
                              <p>Lorem ipsum dolor sit amet consectetur, 
                                   adipisicing elit. Labore quam corrupti deserunt! Voluptatem 
                                   nemo iste consequatur esse sint dignissimos quo beatae error, 
                                   earum aspernatur nulla! Ipsa ea quis laboriosam voluptate.</p>
                         </div>
                         <div className={styles.buttonArea}>
                              <Buttom txt='Ver mais' onClick={handlerClick} />
                         </div>
                    </div>
                    <img className={styles.photoArea} src='../../../../public/screen.png'/>
               </div>
                    }
          </main>    
     )
}