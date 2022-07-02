import React from 'react';
import ecommerce from "./images/e-commerce.png"
import market from "./images/MarketWatch.jpg"
import ALTF4 from "./images/alt-f4.png"
import regex from "./images/Regex-research.png"
import walk from "./images/WalkThisWay.jpg"
import book from "./images/BookSearch.jpg"
import github from "./images/github link.png"
import link from "./images/link.png"

export default function Home() {
  return (
    <div>
      <center><h2 id="about-me">My Projects!</h2></center>
      <div class="card-group">
  <div class="card">
    <img class="card-img-top" src={market} alt="Market Watch"></img>
    <div class="card-body">
      <h5 class="card-title">Market Watch</h5>
      <p class="card-text">Description - For our project, we had made a Stock Market Tracker on US Companies. It shows the user a small profile of their ticker symbol and current price. There is also a news feed page which shows us popular business news but can be altered if you input the company you would like to read about. Motivation for development? - We decided we wanted to build something quite challenging for the project and building an application regarding the stock markets would be really fun and exciting to build. User story - As a Market Shareholder, I want to see a company Current Price and Change Live every time the user refresh the page.</p>
      <p class="card-text"><small class="text-muted">Created 01/02/2022</small></p>
      <a href='https://github.com/Yutthana00/MarketWatch'><img id="githubicon" class="card-img-top" src={github} alt="Market Watch Github"></img></a>
      <a href='https://arjunkhakh.github.io/Market-Watch/'><img id="githubicon" class="card-img-top" src={link} alt="Market Watch Visual"></img></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={ALTF4} alt="ALT-F4"></img>
    <div class="card-body">
      <h5 class="card-title">ALT-F4</h5>
      <p class="card-text">Alt-F4 is a website where you can review your favourite video games and discover the latest game trends. We wanted to create a website that brought the gaming community together in a fun way. We believe that encouraging the players to review games more is the key to improving the user experience and bettering games in the future. Alt-F4 is currently a small aspect of, what we believe is, the potential this website could have on the community.
            for the city also.</p>
      <p class="card-text"><small class="text-muted">Created 24/01/2022</small></p>
      <a href='https://github.com/Yutthana00/ALT-F4'><img id="githubicon" class="card-img-top" src={github} alt="ALT F4"></img></a>
      
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={regex} alt="Regex Research"></img>
    <div class="card-body">
      <h5 class="card-title">Regex Research</h5>
      <p class="card-text">This project is focuses more on the theoretical side of coding. Regular Expressions (Regex) are sequences of metacharacters that symbolise a pattern. The patterns could be a mixture of letters, digits, special characters or even different languages. Web Developers often need to validate user inputs in numerous forms. Since it's the origin of the data, it forms crucial importance between the client and the server.</p>
      <p class="card-text"><small class="text-muted">Created 25/02/2022</small></p>
      <a href='https://gist.github.com/Yutthana00/94bbbc140c8a8bf4dd0c3a8d04c89a09'><img id="githubicon" class="card-img-top" src={github} alt="ReadMe Github"></img></a>
    </div>
  </div>
</div> 

<div class="card-group">
  <div class="card">
    <img class="card-img-top" src={walk} alt="Walk this way"></img>
    <div class="card-body">
      <h5 class="card-title">Walk This Way</h5>
        <p class="card-text">Have you ever followed a route from a walking guidebook only to be disappointed by the view (or lack of)? Have you ever seen a photo of a beautiful view and thought "THAT'S where I want to walk"? Yes? Walk This Way!

        Walk This Way is a social media-come-walking routes hub that aims to link those seeking stunning scenery with those who are capturing them on camera.
        
        Users can browse posts to find inspiration for their next adventure, or post their own hikes to celebrate and spur others on.
        </p>
      <p class="card-text"><small class="text-muted">Created 05/04/2022</small></p>
        <a href='https://github.com/Yutthana00/Walk-This-Way'><img id="githubicon" class="card-img-top" src={github} alt="Energy Refined Github"></img></a>
        <a href='https://murmuring-fjord-50502.herokuapp.com/'><img id="githubicon" class="card-img-top" src={link} alt="Energy Refined Visual"></img></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={ecommerce} alt="E-Commerce Back End"></img>
    <div class="card-body">
      <h5 class="card-title">E-Commerce Back End</h5>
        <p class="card-text">Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. On This Application, I had created a Back-End E-Commerce API Application. I achieved this using Insomnia to create routes for each function. The routes were placed into Insomnia leading to all requests made to test the API will responsiveness to user input.</p>
        <p class="card-text"><small class="text-muted">Created 24/03/2022</small></p>
      <a href='https://github.com/Yutthana00/Virtual-shoping-back-end'><img id="githubicon" class="card-img-top" src={github} alt="E-Commerce Github"></img></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={book} alt="Book Search"></img>
    <div class="card-body">
      <h5 class="card-title">Book Search</h5>
      <p class="card-text">This is a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.</p>
      <p class="card-text"><small class="text-muted">Created 03/05/2022</small></p>
      <a href='https://github.com/Yutthana00/search-books'><img id="githubicon" class="card-img-top" src={github} alt="social Network Github"></img></a>
      <a href='https://tinyurl.com/3bbebn67'><img id="githubicon" class="card-img-top" src={link} alt="Market Watch Visual"></img></a>
    </div>
  </div>
</div> 
    </div>
  );
}
