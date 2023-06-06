import  styles  from './PhoneNordeste.module.css'

import { Logo } from '../../../components/logoSvg/logo'
import { Buttom } from '../../../components/buttom';
import { useNavigate } from 'react-router-dom';

const show:boolean = true;

export const PhoneNordeste = () => {
     const navigate = useNavigate()

     const handlerSeeMore = () => {
          navigate('/');
     }
     const handlerContactUs = () => {
          navigate('/contactus')
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
                              <Buttom txt='Ver mais' onClick={handlerSeeMore} bgAndTxtColor='#fff/#000' />
                              <Buttom txt='Contact Us' onClick={handlerContactUs} bgAndTxtColor='#0cb7f2/#fff' />
                         </div>
                    </div>
                    <img className={styles.photoArea} src='../../../../public/screen.png'/>
               </div>
                    }
          </main>    
     )
}