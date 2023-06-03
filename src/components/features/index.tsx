import styles from './styles.module.css'
import { features } from '../../helpers/Feature' 
import {Feature} from '../../helpers/Feature'
import { useNavigate } from 'react-router-dom';

type Props ={
     item: Feature;

}

export const GridFeatures = ({item}: Props) => {
     const navigate = useNavigate();

     const handleClick = () => {
          navigate(`/feature/${item.link}`)
     }

     return(
          <div className={styles.featurePage} onClick={handleClick}>
               <div className={styles.info}></div>    
               <h3>{item.title}</h3>
               <img src={item.image} alt="" />
           </div>
     )
} 