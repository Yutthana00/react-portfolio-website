import React from 'react';
import ResumePDF from './images/cv-screenshot.pdf'
import ResumeJPG from './images/yutthana-cv.jpg'

export default function Resume() {
  return (
    <div>
<center>
<h1>My Resume!</h1>

 <a href={ResumePDF} download="pdf-cv" id="resumeText">Download the PDF</a>
    <div class="resume">
<img src={ResumeJPG} alt="resume" id="resumeid"></img>
</div>
</center>
    </div>
  );
}
