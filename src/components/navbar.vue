<template>
  <div class="container">
    <div class="logo-container">
      <RouterLink class="link-item" to="/">Food Frenzy</RouterLink>
    </div>
    <nav>
      <RouterLink class="link-item" to="/start">Get Started</RouterLink>
      <RouterLink class="link-item" to="/about">About US</RouterLink>
      <RouterLink class="link-item" to="/meals">Recommendations</RouterLink>
      <RouterLink class="link-item" to="/faq">Contact US</RouterLink>
    </nav>
  
  </div>
</template>

<script setup>

</script>

<style scoped>
  .container {
    font-size: 1.4vw;
    padding: 40px 60px 40px 60px;
    display: flex;
    background-color:#aac5d1;
  }
  .logo-container, nav, .extras-container {
    flex: 1;
  }
  .logo-container {
    font-size: 3vw;
    font-weight: 800;
    cursor: pointer;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .link-item {
    text-decoration: none;
    color: black;
    position: relative;
    top: 0;
    transition: 0.3s ease-in-out;
  }
  .link-item:hover {
    top: -10px;
    color: rgb(64, 166, 235);
  }

  
  @media (max-width: 1024px) {
    /* Tablet View */
  .container {
    font-size: 16px;
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  .logo-container {
    font-size: 24px;
  }
  nav {
    justify-content: center;
  }

}
</style>