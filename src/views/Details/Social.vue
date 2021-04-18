<template>
  <div id="details socialmedia" >
    <h1 class="project-title">Social Media Management</h1>
    <div class="brands">
      <p>Brands who's social media pages I have worked on: </p>
      <div id="brand-images">
        <img src="@/assets/posts/brands/suzuki2.png" class="brand-img">
        <img src="@/assets/posts/brands/jager.jpg" class="brand-img">
        <img src="@/assets/posts/brands/spar.png" class="brand-img">
        <img src="@/assets/posts/brands/groupama2.jpg" class="brand-img">
        <img src="@/assets/posts/brands/mol.png" class="brand-img">
        <img src="@/assets/posts/brands/budapestbank.png" class="brand-img">
        <img src="@/assets/posts/brands/samsung.png" class="brand-img">
        <img src="@/assets/posts/brands/nescafe.png" class="brand-img">
      </div>
    </div>
    <div class="posts" v-for="n in 42" :key="n">
       <img :src='require(`@/assets/posts/post${n}.png`)' class="post" />
    </div>
  </div>
</template>

<style>
  #socialmedia {
    width: 800px;
  }
  img {
    width: 650px;
  }
  .posts {
    display: grid;
    grid-gap: 3rem;
    margin: 3rem auto;
    justify-content: center;
  }
  .brands {
    width: 300px;
    margin: 5rem auto;
  }
  #brand-images {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

  }
  .brand-img {
    width: 140px;
    margin-left: 2rem;
  }

  @media (max-width: 1400px) {
    #brand-images {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 1400px) {
    .post {
      width: 450px;      
    }
  }

  @media (max-width: 500px) {
    #brand-images {
      display: flex;
      flex-direction: column;
    }
    .brand-img {
      margin-left: 0;
      margin-bottom: 1.2rem;
    }
    .post {
      width: 400px;
    }
  }

  @media (max-width: 376px) {
    .post {
      width: 320px;      
    }
  }

  @media (max-width: 320px) {
    .post {
      width: 280px;      
    }
  }


</style>