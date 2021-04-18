<template>
  <div id="about">
    <div class="about-me">
      <div class="profile-img">
        <img src="@/assets/profilepic.jpg" id="profile-pic">
        <h1 id="name">Dániel Raj</h1>
      </div>
      <ul class="addresses">
          <li class="address"><img src="@/assets/icons/email.png"  class="icon"> <p class="address-text"><router-link to="/contact" class="link"> Send me a message</router-link></p> </li>
          <li class="address"><img src="@/assets/icons/linkedin.png"  class="icon"> <p class="address-text"><a class="link" href="https://www.linkedin.com/in/d%C3%A1niel-raj-a5427996/" target="_blank"> Check my resume </a></p></li>
          <li class="address"><img src="@/assets/icons/github.png"  class="icon"> <p class="address-text"><a class="link" href="https://github.com/dani-raj" target="_blank"> Go to my GitHub profile </a></p></li>
      </ul>
    </div>
    <div class="about-description">
       <p>
        After being a creative copywriter for 6 years, creating many campaigns for major brands, writing a lot of ads (only the ones you liked)
        and winning some awards with my colleagues, I now feel the need to look for other challenges. 
        <br><br>
        Around a year ago a friend of mine recommended me to try to learn the basics of web development. 
        I quickly learned how to make basic projects and I had so much fun doing it that I dived into it deeper.
        <br>
        A year later, with endless amounts of Youtube videos, Udemy courses and googling behind me, I built some bigger apps that you can find in this portfolio.
        <br>
        I'm focused on understaning Vue.js and I can't wait to put my knowledge into practise with real-life projects.
        <br>
        Programming feels like a game to me. Sometimes easy, sometimes challenging, but it's always satisfying to solve something and see its result.
        <br><br>
        The portfolio also includes my work from the times I was a creative and some design projects I made for fun.
        <br><br>
        Don't hesitate to contact me if you feel I would be a good fit in your team!
        </p>
    </div>
  </div>
</template>


<script>
export default {

}
</script>

<style>
  #about {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 4rem auto 6rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .about-me {
    flex: 1;
    align-items: flex-start;
    padding: 2rem;
  }
  #profile-pic {
    width: 200px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
  }
  .about-description {
    flex: 1;
    text-align: left;
    padding: 4rem;
  }
  .addresses {
    list-style: none;
    text-align: left;
    width: 250px;
    margin: 0 auto;
  }
  .address {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .icon {
    width: 30px;
    margin-right: 10px;
  }

  @media (max-width: 1024px) {
    #about {
      display: flex;
      flex-direction: column;
      width: 90%;
    }
    #profile-pic {
      margin: 2rem 0;
      width: 200px;
    }
    .about-description {
      padding: 2rem;
    }
  }

  @media (max-width: 320px) {
    .about-me {
      padding: 0;
    }
  }


</style>