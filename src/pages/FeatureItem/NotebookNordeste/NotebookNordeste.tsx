import  styles  from './NotebookNordeste.module.css';

import note1 from '../../../assets/img/note1.jpg';
import note2 from '../../../assets/img/note2.jpg';
import note3 from '../../../assets/img/note3.jpg';
import { Buttom } from '../../../components/buttom';
import { useNavigate } from 'react-router-dom';

export const NotebookNordeste = () => {
     const navigate = useNavigate();

     const handleClick = () => {
          navigate('/')
     }

     return (
          <main className={styles.mainNote}>
               <div className={styles.container}>
                         <div className={styles.infoNoteArea}>
                              <img className={styles.noteImg} src={note1} alt="" />
                              <div className={styles.noteDescription}>
                                   <h3>Ensino</h3>
                                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Minus distinctio omnis dicta alias animi nam vel nesciunt, 
                                        ex suscipit ratione soluta.</p>
                              </div>
                         </div>
                         <div className={styles.infoNoteArea}>
                              <div className={styles.noteDescription}>
                                   <h3>Lazer</h3>
                                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Minus distinctio omnis dicta alias animi nam vel nesciunt, 
                                        ex suscipit ratione soluta.</p>
                              </div>
                              <img className={styles.noteImg} src={note2} alt="" />
                         </div>
                         <div className={styles.infoNoteArea}>
                              <img className={styles.noteImg} src={note3} alt="" />
                              <div className={styles.noteDescription}>
                                   <h3>Trabalho</h3>
                                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Minus distinctio omnis dicta alias animi nam vel nesciunt, 
                                        ex suscipit ratione soluta.</p>
                              </div>
                         </div>   
                         <div className={styles.buttonPlace}>
                              <Buttom txt='Conhecer Mais' bgAndTxtColor='#fff/#000' onClick={handleClick} />
                         </div>
               </div>
          </main>    
     )
}