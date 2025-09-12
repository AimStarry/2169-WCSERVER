<template>
  <div class="blog">
    <h1>{{ title }}</h1>

    <div id="blog-details">
      <h2>Here are some blog posts online about Leonardo Da Vinci</h2>

      <div class="blog-card">
        <h3>Blog 1</h3>
        <a href="https://www.scientificamerican.com/blog/observations/the-mind-of-leonardo-da-vinci/" target="_blank">
          The Mind of Leonardo Da Vinci
        </a>
      </div>

      <div class="blog-card">
        <h3>Blog 2</h3>
        <a href="https://www.scientificamerican.com/blog/observations/the-mind-of-leonardo-da-vinci/" target="_blank">
          The Life of Leonardo Da Vinci: 9 Facts They Didn’t Teach You in School
        </a>
      </div>

      <div class="blog-card">
        <h3>Blog 3</h3>
        <a href="https://erickimphotography.com/blog/leonardo-lessons/" target="_blank">
          30 Lessons Leonardo da Vinci Has Taught Me About Photography, Art, and Life
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: 'Leonardo Da Vinci Blog Collection',
    }
  }
}
</script>

<style scoped>
.blog {
  font-family: 'Georgia', serif;
  background-color: rgb(233, 232, 232);
  padding: 2rem;
  color: #2c3e50;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

#blog-details h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.blog-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.blog-card h3 {
  margin-bottom: 0.5rem;
}

a {
  color: #2980b9;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
