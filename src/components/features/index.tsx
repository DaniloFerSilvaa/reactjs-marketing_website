import styles from './styles.module.css'
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
          <div className={styles.itemInfo} onClick={handleClick}>
               <img className={styles.imgItem} src={item.image} alt="" />
               <h4 className={styles.titleItem}>{item.title}</h4>
               <p className={styles.descriptionItem}>{item.description}</p>
           </div>
     )
} 