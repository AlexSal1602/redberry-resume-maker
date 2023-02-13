import styles from './ResumeFormStyles.module.css';

function PersonalInfo() {
  return (

    <>
      <div className={styles.personalinfoform}>
        <div className={styles.namesurname}>
          <div>
            <label htmlFor="name">სახელი</label>
            <input type="text" id='name' name='name' />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div>
            <label htmlFor="surname">გვარი</label>
            <input type="text" id='surname' name='surname' />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>
        <div className={styles.photoupload}>
            <label for="myphoto">პირადი ფოტოს ატვირთვა</label>
            <input type="file" id={styles.myphoto} name="myphoto" />
        </div>
        <div className={styles.aboutme}>
          <textarea name='aboutme' placeholder='ზოგადი ინფო შენ შესახებ' />
        </div>
        <div className={styles.email}>
          <label for="email">Enter your email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.phonenumber}>
          <input type="number" />
        </div>
      </div>
    </>
  )
}

export default PersonalInfo