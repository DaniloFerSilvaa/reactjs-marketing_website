import styles from './styles.module.css'
import { features } from '../../helpers/Feature' 
import {Feature} from '../../helpers/Feature'

type Props ={
     item: Feature;
}

export const GridFeatures = ({item}: Props) => {
     return(
          <div className={styles.featurePage}>
               <div className={styles.info}></div>    
               <h3>{item.title}</h3>
               <img src={item.image} alt="" />
           </div>
     )
} 