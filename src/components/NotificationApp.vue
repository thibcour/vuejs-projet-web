<template>
  <div v-if="message" :class="`notification ${type}`">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info' // 'info', 'error', 'success'
    }
  }
};
</script>

<style scoped>
.notification {

  position: fixed; /* Rend la barre de notification fixe */
  top: 50px; /* Distance entre le haut de la page et la barre de notification */
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 3px;
  color: white;
  text-align: center;
  z-index: 3000;/* Assure que la barre de notification est au-dessus des autres éléments */
}



.notification.info {
  background-color: #2196F3;
}

.notification.error {
  background-color: #F44336;
}

.notification.success {
  background-color: #4CAF50;
}
</style>