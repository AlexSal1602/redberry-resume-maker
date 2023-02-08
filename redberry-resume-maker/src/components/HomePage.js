import {NavLink} from 'react-router-dom';
import HomePageCSS from './HomePage.module.css';


function HomePage() {
  return (
    
    <div className={HomePageCSS.homepage}>    
      <header className="app-header">
        <div className="logo"></div>
        <hr />
      </header>

      <content-body className="app-content-body">
      <NavLink to={'resumeform'}><button className={HomePageCSS.btn}>რეზიუმეს დამატება</button></NavLink>
      </content-body>
    </ div>
    
  )
  
}

export default HomePage