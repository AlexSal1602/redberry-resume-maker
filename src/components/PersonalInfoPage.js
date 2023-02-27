import { useState, useEffect } from 'react';
import Resume from './Resume';
import styles from './ResumeFormStyles.module.css';

function PersonalInfo() {
  const [val, setVal] = useState({
    nameValue: '',
    surNameValue: '',
    aboutValue: '',
    emailValue: '',
    phoneNumberValue: '',
    photo: ''
  });

  const [isInputChanged, setIsInputChanged] = useState(false);
  const handleChange = (event) =>{
    setIsInputChanged(true);
    const { name , value }= event.target;
    setVal ((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  } 

  
  //upload image
  const [imageFile, setImageFile] = useState();
  const handleImage = (e) => {
        console.log(e.target.files);
        setImageFile(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(()=>{
    console.log('something')
  },[val])

  return (
  
    <>
    <div className={styles.wholePage}>
      <div className={styles.personalinfoform}>
        <div className={styles.namesurname}>
          <div>
            <label htmlFor="name">სახელი</label>
            <input 
              onChange={handleChange}
              type="text" 
              id='name' 
              name='nameValue' 
              placeholder='ანზორ' 
              required />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div>
            <label htmlFor="surname">გვარი</label>
            <input 
              onChange={handleChange}
              type="text"
              id='surname' 
              name='surNameValue'
              placeholder='მუმლაძე'
              required />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>
        <div className={styles.photoupload}>
            <label for="myphoto">პირადი ფოტოს ატვირთვა</label>
            <input
              onChange={handleImage}
              type="file"
              id={styles.myphoto}
              name="myphoto"
              required/>
        </div>
        <div className={styles.aboutme}>
          <label htmlFor="aboutme">ჩემ შესახებ (არასავალდებულო)</label>
          <textarea 
            onChange={handleChange}
            name='aboutValue'
            id='aboutme'
            placeholder='ზოგადი ინფო შენ შესახებ' />
        </div>
        <div className={styles.email}>
          <label for="email">ელ.ფოსტა</label>
          <input 
            onChange={handleChange}
            className={isInputChanged ? `${styles.emaill}` : ''}
            type="email" 
            id="email" 
            name="emailValue" 
            placeholder='anzorr666@redberry.ge' 
            required />
          <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </div>
        <div className={styles.phonenumber}>
          <label for="phonenumber">მობილურის ნომერი</label>
          <input
          onChange = {handleChange}
          type="text" 
          id="phonenumber" 
          name="phoneNumberValue" 
          placeholder='+995 551 12 34 56' 
          required />
          <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
        </div>
      </div>
      <Resume        
        resumeName = {val.nameValue}
        resumeSurName = {val.surNameValue}
        aboutMe = {val.aboutValue} 
        email = {val.emailValue} 
        phoneNumber = {val.phoneNumberValue}
        photo = {imageFile}
        />
    </div>
    </>
  )
}

export default PersonalInfo