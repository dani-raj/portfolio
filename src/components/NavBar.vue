<template>
  <div id="navbar">
    <div class="nav-links">
        <div class="main-link">
            <router-link to="/" class="nav-item name" >Daniel Raj</router-link>
        </div>
        <ul class="side-links">
            <li><router-link to="/about" class="nav-item" >About</router-link></li>
            <li><router-link to="/contact" class="nav-item">Say Hi</router-link></li>
        </ul>
    </div>
  </div>
</template>

<style>
    #navbar {
        width: 95%;
        margin: 0 auto;
    }
    .nav-links, .side-links {
        list-style: none;
        display: flex;
        text-transform: uppercase;
        align-items: center;
        justify-content: space-between;
    }
    .nav-item {
        color: #000;
        text-decoration: none;
        margin: 2rem;
    }
    .nav-item:hover {
        font-weight: 500;
    }

    @media (max-width: 500px) {
        .nav-item {
            margin: 0 1rem;
        }
    }

    @media (max-width: 320px) {
        .nav-item {
            margin: 0 .5rem;
        }
    }

    @media (max-width: 280px) {
        .nav-item {
            margin: 0 .3rem;
        }
    }

</style>