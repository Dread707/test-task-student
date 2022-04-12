<template>
  <div>
    <v-app id="app">
      <navbar></navbar>
      <Main class="main-container"></Main>
      <Footer></Footer>
    </v-app>

  </div>
</template>
<script>
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";
import Main from "@/components/Main";
export default {
  components: { Main, Footer, Navbar },
}
</script>
<style>
html { overflow:  hidden; }

.fixed-bottom {
  position:fixed;
  right:0;
  bottom:0;
  left:0
}
</style>