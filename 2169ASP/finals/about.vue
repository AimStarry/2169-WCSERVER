<template>
  <div class="vue">
    <h1 id="title">{{title}}</h1>

    <!--Mission-->
    <div id="vission">
      <h1>Vission</h1>
      <p>
        Creating work that inspires peace, connecting with a community, sparking reflection on the human condition, or making a positive change in the world.
      </p>
    </div>

    <!--Mission-->
    <div id="mission">
      <h1>Mission</h1>
      <p>
        To show the world the power of art and inspire others to pursue artwork. To create art that heals, changes perspectives, or empowers positive change to everyone.
      </p>
    </div>

    <div id="about-author">
      <h1>Author</h1>
      <p>
        Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect
      </p>
      <p>
        Born: April 15, 1452, Anchiano, Italy
      </p>
      <p>
        Died: May 2, 1519 (age 67 years), Château du Clos Lucé, Amboise, France
      </p>
    </div>

    <div id="legacy">
      <h1>Legacy</h1>
      <p>
        Leonardo da Vinci's notebooks provide a profound insight into his genius, revealing the intellectual foundations behind his iconic artworks and innovative designs. He remains a defining figure of the High Renaissance, his curiosity and intellect epitomizing the era's humanist ideals
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        title: 'About'
      }
    }
  }
</script>

<style scoped>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  .vue {
    background-color: rgb(233, 232, 232);
    width: 50%; /* A defined width is required */
    margin: 20px auto 20px auto; /* Distributes remaining space equally to the left */
    padding: 10px 25px;
    border: 4px solid black;
  }

  h1, p {
    text-align: center;
  }

  h1 {
    font-size: 40px;
    margin-top: 25px;
  }

  #title {
    padding: 10px 0;
    font-weight: bold;
    font-size: 50px;
    border-bottom: 3px solid black;
  }

  p {
    font-size: 20px;
    margin-top: 20px;
  }

</style>
