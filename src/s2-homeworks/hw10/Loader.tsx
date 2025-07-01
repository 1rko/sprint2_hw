import s from './Loader.module.css'
import loader from '../../assets/Iphone-spinner-2.gif'

export const Loader = () => {
    return <div className={s.loader}>
       <img src={loader} alt={'Loader'}/>
    </div>
}
