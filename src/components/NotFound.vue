<template>
  <div class="not-found-container">
    <img src="../assets/LogoToboo.png" alt="Logo" class="logo">
    <h1>404 Not Found</h1>
    <p>La page que vous recherchez n'existe pas.</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 50vh;
  text-align: center;

}

.logo {
  width: 100px;
  height: 100px;
}

h1 {
  color: #333;
  font-size: 2em;
}

p {
  color: #666;
}
</style>