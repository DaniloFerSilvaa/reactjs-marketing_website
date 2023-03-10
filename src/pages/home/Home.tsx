import  styles  from './Home.module.css'
import stylesFeature from '../../components/features/styles.module.css'
import imgTitle from '../../assets/img/img-title.jpg' 
import { features } from '../../helpers/Feature' 
import {GridFeatures} from '../../components/features'
import { Buttom } from '../../components/buttom'


export const Home = () => {

     return(
          <div className={styles.body}>
               <div className={styles.circle}></div>       
               <main className={styles.main}>
                    <div className={styles.title}>
                         <div className={styles.initialInfo}>
                         <h1>Descubra Mais Sobre Você </h1>
                         <h3>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock </h3>
                         <Buttom txt="Contact Us" />
                         </div>
                         <img src={imgTitle} alt="" />
                    </div>
                    <div className={styles.features}>
                         {features.map((item, index) => (
                              <GridFeatures key={index} item={item}/>
                         ))
                         }
                    </div>
               </main>
          </div>
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