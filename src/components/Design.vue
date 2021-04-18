<template>
    <div class="container">
        <div class="project">
            <div class="left-side info">
                <h1>Emirates Inflight Entertainment</h1>
                <p class="description">
                    Inflight Entertainment enables passangers to have a great time during long-haul flights.
                    It consists countless hours of movies, music, games and it even assists the cabin crew.
                    My goal was to create an easy to use interface that resonates with Emirate's corporate image.
                </p>
                <div class="technologies">
                    <h3>Technologies used</h3>
                    <p>Adobe XD, Adobe Photoshop, Adobe After Effects</p>
                </div>
                <div class="project-links">
                    <router-link :to="{ name: 'Details', params: { toshow: 'details', selectedproject: 'emirates' }}"><button class="project-link">Details</button> </router-link>
                </div>
            </div>
            <div class="right-side">
                <img src="../assets/covers/emirates.png" class="image">
            </div>
        </div>

        <div class="project">
            <div class="left-side">
                <img src="../assets/covers/junipero.png" class="image">
            </div>
            <div class="right-side info">
                <h1>San Junipero</h1>
                <p class="description">
                    This design was influenced by the famous Black Mirror episode.
                    The site was made for a fictional traveling agency in the world of San Junipero.
                </p>
                <div class="technologies">
                    <h3>Technologies used</h3>
                    <p>Adobe XD, Adobe Photoshop, Adobe After Effects</p>
                </div>
                <div class="project-links">
                    <router-link :to="{ name: 'Details', params: { toshow: 'details', selectedproject: 'junipero' }}"><button class="project-link">Details</button> </router-link>
                </div>
            </div>
        </div>

        <div class="project">
            <div class="left-side info">
                <h1>Mental Therapy site</h1>
                <p class="description">
                    This design was made for my mother in law's coaching business.
                </p>
                <div class="technologies">
                    <h3>Technologies used</h3>
                    <p>Adobe XD</p>
                </div>
                <div class="project-links">
                    <router-link :to="{ name: 'Details', params: { toshow: 'details', selectedproject: 'mental' }}"><button class="project-link">Details</button> </router-link>
                </div>
            </div>
            <div class="right-side">
                <img src="../assets/covers/mental.png" class="image">
            </div>
        </div>


    </div>
</template>

