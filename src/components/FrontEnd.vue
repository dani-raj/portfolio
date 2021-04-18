<template>
    <div class="container">
        <div class="project">
            <div class="left-side info">
                <h1>CountryWiki</h1>
                <p class="description">
                    My main project is a catalogue of each and every country using two open APIs (one for the countries and one for their currencies).
                    Users can search for a specific country and get its details, such as the number of people living there or the value of its currency.
                    The app also includes a quiz game where people can test how well they can recognize the different flags of the world.
                </p>
                <div class="technologies">
                    <h3>Technologies used</h3>
                    <p>Vue.js, Vuex, Axios, Vanilla CSS</p>
                </div>
                <div class="project-links">
                    <a class="project-link" href="https://dani-raj.github.io/countrywiki/" target="_blank"><img src="../assets/play2.png" class="link-logo">Try it out</a>
                    <a class="project-link" href="https://github.com/dani-raj/countrywiki" target="_blank"><img src="../assets/github.png" class="link-logo">Check the code</a>
                </div>
            </div>
            <div class="right-side">
                <img src="../assets/country.gif" class="image">
            </div>
        </div>

        <div class="project">
            <div class="left-side">
                <img src="../assets/cvcards.gif" class="image">
            </div>
            <div class="right-side info">
                <h1>CV Cards</h1>
                <p class="description">
                    Getting a Junior Frontend Developer job is not that easy.
                    You don't have relevant experience yet so the only way to showcase your skills is by making a portfolio.
                    However, every other applicant does the same, so you also want to avoid creating the 100th calculator.
                    With this project I wanted to tackle these problems at once.
                    Instead of the usual memory card game, mine gives a little more insight of who I am and what I can do with each card turning.
                </p>
                <div class="technologies">
                    <h3>Technologies used</h3>
                    <p>Vue.js, Vanilla CSS</p>
                </div>
                <div class="project-links">
                    <a class="project-link" href="https://dani-raj.github.io/cvcards/" target="_blank"><img src="../assets/play2.png" class="link-logo">Try it out</a>
                    <a class="project-link" href="https://github.com/dani-raj/cvcards" target="_blank"><img src="../assets/github.png" class="link-logo">Check the code</a>
                </div>
            </div>
        </div>

        <div class="project">
            <div class="left-side info">
                <h1>Journey Junkies</h1>
                <p class="description">
                    A site I designed and built for a fictional traveling agency organizing trips in the Philippines.
                    The main goal of the project is to show my CSS skills, therefore I didn't use Bootstrap or any other libraries.
                    In order to make it interactive I also used a little bit of JavaScript.
                </p>
                <div class="technologies">
                    <h3>Technologies used</h3>
                    <p>Vanilla CSS, JS</p>
                </div>
                <div class="project-links">
                    <a class="project-link" href="https://dani-raj.github.io/journeyjunkies/" target="_blank"><img src="../assets/play2.png" class="link-logo">Try it out</a>
                    <a class="project-link" href="https://github.com/dani-raj/journeyjunkies" target="_blank"><img src="../assets/github.png" class="link-logo">Check the code</a>
                </div>
            </div>
            <div class="right-side">
                <img src="../assets/philippines.gif" class="image">
            </div>
        </div>

    </div>
</template>

<style>
    .project {
        display: flex;
        flex-wrap: wrap;
        max-width: 80%;
        padding: 3rem;
        margin: 6rem auto 8rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .left-side {
        flex: 1;
    }
    .right-side {
        flex: 1;
    }
    .info {
        text-align: left;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .description{
        max-width: 500px;
    }
    .technologies {
        margin: 3rem 0;
    }
    .project-links {
        list-style: none;
        display: flex;
        padding: 0;
    }
    .project-link {
        display: flex;
        align-items: center;
        color: #000;
        background: transparent;
        border: 1px solid #000;
        padding: .5rem 1.2rem;
        margin: 0 10px 10px 0;
        cursor: pointer;
        transition: all .2s;
        font-size: .9rem;
    }
    .project-link:hover {
        background: rgb(18, 20, 57, .9);
        color: #fff;
    }
    a {
        text-decoration: none;
        color: #2c3e50;
    }
    .link-logo {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
    @media (max-width: 1400px) {
        .image {
            background-size: 30rem;
        }
    }

    @media (max-width: 1201px) {
        .project {
            flex-direction: column;
        }
        .project-links {
            justify-content: center;
        }
        .info {
            text-align: center;
            margin: 0 auto;
        }
    }

    @media (max-width: 800px) {
        .image {
            width: 450px;
        }
    }

    @media (max-width: 625px) {
        .project {
            max-width: 70%;
        }
        .project-link {
            font-size: .8rem;
        }
        .image {
            width: 300px;
            padding: 0;
        }
    }

    @media (max-width: 376px) {
        .image {
            width: 200px;
        }
        .project-link {
            font-size: .6rem;
            padding: .2rem .6rem;
        }
    }

    @media (max-width: 320px) {
        .project {
            max-width: 70%;
            padding: 2rem;
        }
        .info {
            padding: 0;
        }
    }
</style>