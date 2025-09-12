<template>
  <div class="gallery">
    <h1>{{ title }}</h1>
    <img src="https://cdn.britannica.com/87/2087-050-8B2A01CD/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg" alt="monalisa" width="500" height="600">
    <p>The Mona Lisa is a world-famous oil painting by Leonardo da Vinci, created between 1503 and 1519, believed to be a portrait of Lisa del Giocondo.</p>
    <img src="https://smarthistory.org/wp-content/uploads/2022/11/52083520739_1e5b3aa6d6_6k-scaled.jpg" alt="The Last Supper" width="800" height="600">
    <p>Leonardo da Vinci's The Last Supper is a famous mural located in the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy, depicting Jesus's final meal with his apostles and the moment he announces one will betray him. </p>
    <img src="https://www.singulart.com/blog/wp-content/uploads/2023/12/Vitruvian-Man.webp" alt="The Last Supper" width="500" height="600">
    <p>The Vitruvian Man is a famous drawing by Leonardo da Vinci (c. 1490) that illustrates the perfect proportions of the human body, inscribed within both a circle and a square.</p>
    <img src="https://www.artchive.com/wp-content/uploads/2023/04/Head-of-a-Young-Woman-Leonardo-da-Vinci-c.-1506-1508-2.jpg" alt="Head of a Young Woman" width="500" height="600">
    <p>Leonardo da Vinci painted "Head of a Woman", also known as La Scapigliata, a captivating unfinished oil painting on wood, circa 1500, housed in the National Gallery in Parma, Italy.</p>
    <img src="https://smarthistory.org/wp-content/uploads/2022/07/Virgin-of-the-Rocks-scaled.jpg" alt="Virgin of the Rocks" width="500" height="600">
    <p>Leonardo da Vinci's The Virgin of the Rocks depicts the Virgin Mary, the infant Christ, the infant John the Baptist, and an archangel in a mysterious, dark, rocky grotto, arranged in a pyramidal composition with gestures and glances creating human connection.</p>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title: 'Gallery'
    }
  }
}
</script>

<style scoped>
.gallery {
  padding-left: 25em;
  padding-right: 25em;
}
img {
  padding: 2.5em;
  border: 10px solid;
}
p{
  padding: 1.5em;
  font-size: 1.5em;
}
</style>
