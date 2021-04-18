<template>
    <div class="container">
        <div id="intro">
            <p>
                <span id="headline">Why include copywriting works to a developer portfolio?</span>
                I believe that advertising and programming are not that far from each other.
                I think a good user experience is heavily dependent on the copy that guides the user through their journey using the app.
                But more importantly:
                As a creative I faced problems on a daily basis: How to get someone to donate blood or change their mind on homelessness?
                To find the answer I had to have the same qualities that make someone a good developer: analytical thinking and problem solving skills. 
            </p>
        </div>
        <div class="project">
            <div class="left-side info">
                <h1>Hungary's Grocery List</h1>
                <p class="description">
                    SPAR and the Hungarian Charity Service of the Order of Malta has been helping those in need for over 20 years with their Joy to Give campaign.
                    Most fundraising campaigns communicate how many tons of donation they need.
                    But most people can't comprehend that and don't really know how they could help.
                    So we decided to let the tons go and show how much donation we need in a much more palpable way.
                </p>
                <div class="project-links">
                    <router-link :to="{ name: 'Details', params: { toshow: 'details', selectedproject: 'grocery' }}" ><button class="project-link" >Details</button> </router-link>
                </div>
            </div>
            <div class="right-side">
                <img src="../assets/covers/grocerylist.png" class="image">
            </div>
        </div>

        <div class="project">
            <div class="left-side">
                <img src="../assets/covers/traffipax.png" class="image">
            </div>
            <div class="right-side info">
                <h1>The Human Traffipax</h1>
                <p class="description">
                Goal: Let urban, always in late people know that SPAR enjoy sandwich is their best choice when it comes to grab something quick and delicious.
                <br><br>
                Our solution was to create the world's first Human Traffipax that captured those who were really hurrying, so we could give them the thing they
                probably needed the most: the breakfast they had to skip.
                </p>
                <div class="project-links">
                    <router-link :to="{ name: 'Details', params: { toshow: 'details', selectedproject: 'traffipax'}}"><button class="project-link">Details</button> </router-link>
                </div>
            </div>
        </div>

        <div class="project">
            <div class="left-side info">
                <h1>The Sports Fan Inside</h1>
                <p class="description">
                    Everybody has a sports fan inside them.
                    It comes out when our favourite team plays or when we see someone trying to catch the bus.
                    And it also came out when we put the focus on it in MOL's 2016 campaign to show how the company sponsors Hungarian sport.
                </p>
                <div class="project-links">
                    <router-link :to="{ name: 'Details', params: { toshow: 'details', selectedproject: 'rooter'}}"><button class="project-link">Details</button> </router-link>
                </div>
            </div>
            <div class="right-side">
                <img src="../assets/covers/rooter.png" class="image">
            </div>
        </div>

        <div class="project">
            <div class="left-side">
                <img src="../assets/covers/ideas2.png" class="image">
            </div>
            <div class="right-side info">
                <h1>Night of The Dead Ideas</h1>
                <p class="description">
                    There are ideas that we know are amazing from the get go.
                    These are the ideas that make us see ourselves getting a Cannes Lions while the crowd is cheering.
                    But sometimes instead of the award we only receive an awkward silence or suppressed laughs.
                    "Haha, just joking" - you say as you force yourself not to cry.
                    We can't mourn these ideas forever.
                    It's time to let them go.
                </p>
                <div class="project-links">
                    <router-link :to="{ name: 'Details', params: { toshow: 'details', selectedproject: 'ideas'}}"><button class="project-link">Details</button> </router-link>
                </div>
            </div>
        </div>

        <div class="project">
            <div class="left-side info">
                <h1>The Real Mannequin Challenge</h1>
                <p class="description">
                The most popular challenge of 2017 was the Mannequin Challenge in which people pretented they were frozen.
                The funny meme gave us the chance to highlight something serious that people tend to overlook.
                </p>
                <div class="project-links">
                    <router-link :to="{ name: 'Details', params: { toshow: 'details', selectedproject: 'mannequin'}}"><button class="project-link">Details</button> </router-link>
                </div>
            </div>
            <div class="right-side">
                <img src="../assets/covers/mannequin2.png" class="image">
            </div>
        </div>

        <div class="project">
            <div class="left-side">
                <img src="../assets/covers/social.png" class="image">
            </div>
            <div class="right-side info">
                <h1>Social Media Management</h1>
                <p class="description">
                I think I wrote hundreds of posts and got thousands of likes over the years as a creative copywriter.
                Discover why!
                </p>
                <div class="project-links">
                    <router-link :to="{ name: 'Details', params: { toshow: 'details', selectedproject: 'social'}}"><button class="project-link">Details</button> </router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
    #intro {
        max-width: 60%;
        padding: 3rem;
        text-align: center;
        margin: 6rem auto;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    #headline {
        font-size: 24px;
        font-weight: 600;
        color: rgb(18, 20, 57, .9);
        display: block;
        margin-bottom: 1rem;
    }
</style>