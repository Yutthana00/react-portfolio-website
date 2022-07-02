import React from 'react';
import github from './pages/images/github link.png'
import linkdin from './pages/images/linkdin.png'
import mail from './pages/images/mail.png'

function Footer() {
  return (
    <>    

      <footer className='footerbg' id='centered'>
      <a href='https://github.com/yutthana00'><img id="githubicon" class="card-img-top" src={github} alt="My gitHub page"></img></a>
      <a href='https://linkedin.com/in/yutthana-thapdit'><img id="linkicon" class="card-img-top" src={linkdin} alt="My linkedin page"></img></a>
      <a href='https://arf101293@gmail.com'><img id="mailicon" class="card-img-top" src={mail} alt="My contact page"></img></a>
      </footer>
    
  </>
  );
}

export default Footer;