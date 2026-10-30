<template>
  <header>
    <router-link to="/" class="brand">Jobs App</router-link>
    <nav>
      <router-link to="/">Offres</router-link>
      <router-link to="/add" class="btn">+ Ajouter un emploi</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>
