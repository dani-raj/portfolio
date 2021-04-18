<template>
  <div id="footer">
      <p @click="scrollToTop()" id="to-top-link">Back To Top</p>
  </div>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style>
    #footer {
        height: 80px;
        background: rgb(18, 20, 57, .9);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
    }
    #to-top-link {
        color: #fff;
        font-size: 16px;
    }
</style>