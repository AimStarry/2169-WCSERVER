<template>
  <div class="contact">
    <h1>{{ title }}</h1>
    <img src="https://visualpharm.com/assets/176/Contacts-595b40b65ba036ed117d1a26.svg" alt="contacts" width="300" height="300">
    <p>For more information visit this website: https://www.britannica.com/list/10-famous-artworks-by-leonardo-da-vinci</p>
    <p>Contact: Joemar Catipon</p>
    <p>Email: Joemar Catipon</p>
    <p>Github: Joemar Catipon</p>
    <p>Contact: Aimee Li Marael S. Pangan</p>
    <p>Email: aimeelimaraelst@gmail.com</p>
    <p>Github: https://github.com/AimStarry</p>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1.5em;
}
</style>
