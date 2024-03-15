<template>
  <div>
    <h1>dashboard</h1>
    <UserManagement />
    <ProductManagement />
  </div>
</template>

<script>
import UserManagement from './UserManagement.vue';
import ProductManagement from './ProductManagement.vue';

export default {
  components: {
    UserManagement,
    ProductManagement
  }
};
</script>