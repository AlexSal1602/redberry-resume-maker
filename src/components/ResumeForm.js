import React, { useState } from 'react';

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

  
  return (
    <>
      <div className="currentResumeStep">{CurrentResumeStep()}</div>
      <Resume />
      <button disabled={resumeStep === 0} onClick={() => setResumeStep((currPage) => currPage - 1)}>Back</button>
      <button disabled={resumeStep === 2} onClick={() => setResumeStep((currPage) => currPage + 1)} >Next</button>
      
      
    </>
  )
}

export default ResumeForm