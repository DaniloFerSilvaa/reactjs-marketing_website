import { Buttom } from '../../components/buttom';
import { Logo } from '../../components/logoSvg/logo';
import styles from './ContactUs.module.css';

import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
import icon3 from '../../assets/img/icon3.png';
import icon4 from '../../assets/img/icon4.png';
import { Link } from 'react-router-dom';

type inputs = {
     name:string
     lastName:string
     telefone:number
     email:string
     message:string
}


export const ContactUs = () => {
     const { register, handleSubmit, formState: { errors } } = useForm()

     
     const onSubmit = (data:any) => {
          console.log(data)
     }
    
     return(
          <main className={styles.mainContact}>
               <div className={styles.bgUp}>
                    
               </div>
               <div className={styles.bgDown}></div>
               <div className={styles.container}>
                    
                    <div className={styles.logoContact}>
                         <Logo/> <h1><Link to='/' className={styles.link}>Lorem</Link></h1>
                    </div>
                    <div className={styles.generalInfoArea}>
                         <div className={styles.textInfo}>
                              <div className={styles.textInfoArea}>
                                   <span>Lorem ip</span>
                                   <h2><i>perferendis</i></h2>
                                   <div className={styles.descArea}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo nobis ab omnis eveniet? Temporibus, ullam et. Totam dignissimos consectetur voluptatibus in quae sequi enim velit nesciunt illo? Temporibus, necessitatibus!</p>
                                        <span>
                                             <button className={styles.buttonBlue}>Lorem ipsum</button>
                                             <button className={styles.buttonBorderBlue}>Lorem ipsum</button>
                                        </span>
                                   </div>
                              </div>
                         </div>
                         <div className={styles.iconArea}>
                              <span>
                                   <img src={icon1} alt="" />
                                   <img src={icon2} alt="" />
                                   <img src={icon3} alt="" />
                                   <img src={icon4} alt="" />
                              </span>
                         </div>
                         <form className={styles.formArea}>
                              <div className={styles.inputArea}>
                                   <h2>Lorem ipsum dolor sit</h2>
                                   <label className={styles.labelNameAndLastName}>
                                        <span>
                                        <input 
                                             type="text" placeholder='NOME' 
                                             {...register("name", {
                                                  required: 'Obrigatório'
                                                })} />
                                                <ErrorMessage errors={errors} name='name'/>
                                                </span>
                                        <input 
                                             type="text" 
                                             placeholder='SOBREBOME' 
                                             {...register('lastName')}/>
                                   </label>
                                   <input 
                                        type="number" 
                                        placeholder='TELEFONE' 
                                        {...register("telefone", {
                                             required: 'Obrigatorio'
                                           })}
                                         
                                        /> 
                                             <ErrorMessage errors={errors} name='telefone'/>
                                   <input 
                                        type="email" 
                                        placeholder='EMAIL' 
                                        {...register("email", {
                                             required: 'Obrigatório'
                                           })}
                                        />
                                        <ErrorMessage errors={errors} name='email'/>
                                   <textarea placeholder='MESSAGE' {...register("message", {
                                             required: 'Obrigatório'
                                           })} ></textarea>
                                   <ErrorMessage errors={errors} name='message'/>
                                   <span className={styles.buttomArea}>
                                   <Buttom txt='Enviar' bgAndTxtColor='#fff/#000' onClick={() => handleSubmit(onSubmit)()}/>
                              </span>
                              </div>
                         </form>
                    </div>
               </div>
          </main>
    )
}