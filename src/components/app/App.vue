<template>
  <div>
    <v-app id="app">
      <navbar></navbar>
      <Main></Main>
      <Footer class="fixed-bottom"></Footer>
    </v-app>

  </div>
</template>
<script>
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";
import Main from "@/components/Main";
export default {
  components: { Main, Footer, Navbar },
  data()
  {
    return  {

    }
  }
}
</script>
<style>
.fixed-bottom {
  position:fixed;
  right:0;
  bottom:0;
  left:0
}
</style>