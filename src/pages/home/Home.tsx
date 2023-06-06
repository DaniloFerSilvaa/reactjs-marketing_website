import  styles  from './Home.module.css'
import imgTitle from '../../assets/img/img-title.jpg' 
import { features } from '../../helpers/Feature' 
import {GridFeatures} from '../../components/features'
import { Buttom } from '../../components/buttom'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
     const navigate = useNavigate()

     const handleClickContactUs = () => {
          navigate('/contactus')
     }

     return(
          <main className={styles.mainHome}>
               <article className={styles.BodyMain}>
                    <h1 className={styles.h1Home}>Conheça nossos Produtos</h1>
                    <div className={styles.itemArea}>
                         {features.map((item, index) => (
                              <GridFeatures key={index} item={item}/>
                         ))
                         }
                    </div>
                    <Buttom txt='Contact Us' bgAndTxtColor='#def7ff/#000' onClick={handleClickContactUs} />
               </article>
          </main>
     )
}

/* COMO TINHA FEITO ANTES DE USAR O .map()

                         <div className={styles.featurePage}>
                              <div className={styles.info}></div>
                              <h3>{features[0].title}</h3>
                              <img src={features[0].image} alt="" />
                         </div>
                         <div className={styles.featurePage}>
                              <div className={styles.info}></div>
                              <h3>{features[1].title}</h3>
                              <img src={features[1].image} alt="" />
                         </div>
                         <div className={styles.featurePage}>
                              <div className={styles.info}></div>
                              <h3>{features[2].title}</h3>
                              <img src={features[2].image} alt="" />
                         </div>
*/