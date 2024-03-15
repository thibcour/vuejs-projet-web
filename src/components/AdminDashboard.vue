<template>
  <div>
    <div class="tiles">
      <router-link to="/user-management" class="tile">
        <h2>User Management</h2>
      </router-link>
      <router-link to="/product-management" class="tile">
        <h2>Product Management</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
/* Styles pour les tuiles */
.tiles {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.tile {
  width: 200px;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.tile:hover {
  background-color: #e0e0e0;
}
</style>
