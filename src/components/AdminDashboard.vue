<template>
  <div class="dashboard">
    <div class="card" @click="$router.push('/user-management')">
      <div class="icon">
        <i class="fas fa-users"></i>
      </div>
      <div class="title">Gestion des utilisateurs</div> <!-- Renamed to French -->
    </div>
    <div class="card" @click="$router.push('/product-management')">
      <div class="icon">
        <i class="fas fa-box-open"></i>
      </div>
      <div class="title">Gestion des produits</div> <!-- Renamed to French -->
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.card {
  width: 250px; /* Increase the width from 200px to 250px */
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 10px;
}

.card:hover {
  background-color: #e0e0f0;
}

.icon {
  font-size: 3em;
  margin-bottom: 10px;
}

.title {
  font-size: 1.30em;
  font-weight: bold;
}
</style>