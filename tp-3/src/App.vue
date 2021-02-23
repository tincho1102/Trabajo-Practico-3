<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  components:{
    Header
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #1E1E1E;
}

#nav a.router-link-exact-active {
  color: #000000;
}

.bg-color-D1EEFE {
    background-color: #369ABE;
}
.bg-color-title {
    background-color: #369ABE;
}
.bg-color-background {
    background-color: #C6C8C3;
}
body{
    overflow-x:hidden;
}
#header.encabezado {
    font-style: italic;
    font-size: 50px;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    padding: 2px;
    margin: 63px 0px 5px 0px;
    border-radius: 8px;
    
}
.navbar-style {
    padding:  5px 2px 5px 0px;
    margin: 0px 2px 0px 2px;
    height: 60px;
    width: auto;
    border-radius: 5px;
    background-color: #369ABE;
    border-style: hidden;
    font-style: italic;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: black;   
}
.font-arial {
    font-family: Arial, Helvetica, sans-serif;
}
.titulo {
    font-weight: bolder;
}
.button-margin {
    margin-right: 2px;
}
.overlay-style {
    top: 255px;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute; 
    display: flex;
    justify-content: center; 
    align-items: center;
    background-color: rgba(0,0,0,0.8);
}
.display-none {
    display: none;
}
.hidden {
    visibility: hidden;
}
.card-modal{
    padding: 30px;
    width: auto;
    height: 50%;
    border-radius: 0px;
}
.space-buttons{
    display: flex;
    align-content: space-between;
}
.button-modal{
    margin-top: 14px;
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 2px;
}
</style>
