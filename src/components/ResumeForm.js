import React, { useState } from 'react';
import styles from './ResumeFormStyles.module.css';

//pages
import Resume from './Resume';
import PersonalInfo from './PersonalInfoPage';
import ExperiencePage from './ExperiencePage';
import EducationPage from './EducationPage';


function ResumeForm() {
  
  const [resumeStep, setResumeStep] = useState(0);

  const resumeSteps = ["პირადი ინფო", "გამოცდილება", "განათლება"];

  const CurrentResumeStep = () => {
    if ( resumeStep === 0) {
      return <PersonalInfo />
    } else if (resumeStep === 1) {
      return <ExperiencePage />
    } else {
      return <EducationPage />
    }
  }

  const FormHeader = () => {
    return(
          <div className={styles.formheader}>
            <p>{resumeSteps[resumeStep]}</p>
            <p>{`${resumeStep + 1}/3`}</p>
          </div>
    )
  }
  
  
  return (
    <>
      <div className={styles.currentResumeStep}>
        <div className={styles.formwrapper}>
        
          <FormHeader />
          <div className={styles.formbody}>{CurrentResumeStep()}</div>
          
          <div className={styles.formfooter} >
            <button disabled={resumeStep === 0} onClick={() => setResumeStep((currPage) => currPage - 1)}>უკან</button>
            <button disabled={resumeStep === 2} onClick={() => setResumeStep((currPage) => currPage + 1)}>შემდეგი</button>
          </div>
        </div>
        {/* <Resume resumeName = {"h1"} /> */}
      </div>      
      
    </>
  )
}

export default ResumeForm