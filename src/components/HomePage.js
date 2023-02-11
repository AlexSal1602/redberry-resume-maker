import {NavLink} from 'react-router-dom';
import styles from './HomePage.module.css';


function HomePage() {
  return (
    
    <div className={styles.homepage}>    
      <header className={styles.appheader}>
        <div className={styles.logo}></div>
        <hr className={styles.wrapperline} />
      </header>

      <content-body className={styles.appcontentbody}>
      <NavLink to={'resumeform'}><button className={styles.btn}>რეზიუმეს დამატება</button></NavLink>
      </content-body>
    </ div>
    
  )
  
}

export default HomePage