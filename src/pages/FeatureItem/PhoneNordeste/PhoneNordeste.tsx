import  styles  from './PhoneNordeste.module.css'

import phoneTransparente from '../../../assets/img/cel-Transparente.png'


export const Phonenordeste = () => {

     return (
          <main className={styles.main}>
               <div className={styles.containerPhone}>
                    <h1>NEXT-LEVEL PHOTOGRAPHY</h1>
                    <h3>Camera setup of your dreams</h3>
                    <div className={styles.midBody}>
                         <p>50MP</p>
                         <img src={phoneTransparente} className={styles.phoneTransparente} alt="" />
                    </div>
                    <div className={styles.footer}>
                         <div className={styles.footerArea}>
                              <div className={styles.boxArea}>
                                   <div className={styles.footerBorderEx}>
                                        <div className={styles.footerBorderInt}>
                                             <div className={styles.footerScreenInt}>
                                                  <div className={styles.circleBlack}></div>
                                             </div>
                                             <div className={styles.footerKeysArea}>
                                                  <div className={styles.circle}></div>
                                                  <div className={styles.circle}></div>
                                                  <div className={styles.circle}></div>
                                                  <div className={styles.circle}></div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className={styles.footerInfo}>
                                        <h4>8MP</h4>
                                        <span>ultra-wide angle</span>
                                   </div>
                              </div>
                              <div className={styles.boxArea}>
                                   <div className={styles.footerBorderEx}>
                                        <div className={styles.footerBorderInt}>
                                             <div className={styles.footerScreenInt}>
                                                  <div className={styles.circle}></div>
                                                  
                                             </div>
                                             <div className={styles.footerKeysArea}>
                                                  <div className={styles.circleBlack}></div>
                                                  <div className={styles.circle}></div>
                                                  <div className={styles.circle}></div>
                                                  <div className={styles.circle}></div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className={styles.footerInfo}>
                                        <h4>50MP</h4>
                                        <span>Man camera</span>
                                   </div>
                              </div>
                              <div className={styles.boxArea}>
                                   <div className={styles.footerBorderEx}>
                                        <div className={styles.footerBorderInt}>
                                             <div className={styles.footerScreenInt}>
                                                  <div className={styles.circle}></div>
                                             </div>
                                             <div className={styles.footerKeysArea}>
                                                  <div className={styles.circle}></div>
                                                  <div className={styles.circle}></div>
                                                  <div className={styles.circleBlack}></div>
                                                  <div className={styles.circle}></div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className={styles.footerInfo}>
                                        <h4>2MP</h4>
                                        <span>Macro camera</span>
                                   </div>
                              </div>
                              <div className={styles.boxArea}>
                                   <div className={styles.footerBorderEx}>
                                        <div className={styles.footerBorderInt}>
                                             <div className={styles.footerScreenInt}>
                                                  <div className={styles.circle}></div>
                                             </div>
                                             <div className={styles.footerKeysArea}>
                                                  <div className={styles.circle}></div>
                                                  <div className={styles.circle}></div>
                                                  <div className={styles.circle}></div>
                                                  <div className={styles.circleBlack}></div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className={styles.footerInfo}>
                                        <h4>2MP</h4>
                                        <span>Depth camera</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </main>    
     )
}