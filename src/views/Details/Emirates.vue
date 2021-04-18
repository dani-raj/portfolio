<template>
    <div class="details emirates">
        <h1 class="project-title">Emirates Inflight Entertainment</h1>
        <iframe src="https://youtube.com/embed/QTABaqEysic"> </iframe>
    </div>
</template>

<script>
export default {
    name: 'Emirates',
    created() {
        console.log(this.$store.params)
    }
}
</script>
