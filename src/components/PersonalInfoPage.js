import { useState } from 'react';
import styles from './ResumeFormStyles.module.css';

function PersonalInfo() {
  const [val, setVal] = useState('');
   const handleChange = (event) =>{
    setVal (event.target.value)
  } 
  return (
  
    <>
      <div className={styles.personalinfoform}>
        <div className={styles.namesurname}>
          <div>
            <label htmlFor="name">სახელი</label>
            <input 
            onChange={handleChange}
            type="text" 
            id='name' 
            name='name' 
            placeholder='ანზორ' 
            value={val} 
            required />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div>
            <label htmlFor="surname">გვარი</label>
            <input type="text" id='surname' name='surname' placeholder='მუმლაძე' required />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>
        <div className={styles.photoupload}>
            <label for="myphoto">პირადი ფოტოს ატვირთვა</label>
            <input type="file" id={styles.myphoto} name="myphoto" required/>
        </div>
        <div className={styles.aboutme}>
          <label htmlFor="aboutme">ჩემ შესახებ (არასავალდებულო)</label>
          <textarea name='aboutme' id='aboutme' placeholder='ზოგადი ინფო შენ შესახებ' />
        </div>
        <div className={styles.email}>
          <label for="email">ელ.ფოსტა</label>
          <input type="email" id="email" name="email" placeholder='anzorr666@redberry.ge' required />
          <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </div>
        <div className={styles.phonenumber}>
          <label for="phonenumber">მობილურის ნომერი</label>
          <input type="text" id="phonenumber" name="phone number" placeholder='+995 551 12 34 56' required />
          <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
        </div>
      </div>
    </>
  )
}

export default PersonalInfo