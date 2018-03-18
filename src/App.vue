<template>
  <div id="app">
    <div>
      <img class="bg-wrap" src="/static/img/bg.jpg" />
    </div>
    <wrap></wrap>
  </div>
</template>

<script>

import wrap from './components/wrap.vue';
export default {
  name: 'App',
  components: {
    wrap
  }
}
</script>

<style>
/* reset */
* {
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 14px;
  font-family: 'Yahei Micsorft';
  box-sizing: border-box;
  cursor: default;
  font-style: normal; 
}

body, html {
  height: 100%;
  width: 100%;
  min-width: 1260px;
  background-color: #fff; 
}

ol, ul, li {
  list-style: none; 
}

a, a:hover, a:visited, a:link, a:active {
  text-decoration: none; 
}

input, textarea {
  background: none;
  border: none;
  padding: 5px 10px;
  cursor: auto; 
}

input:focus, textarea:focus {
  outline: none; 
}

.clearfix:after {
  content: " ";
  clear: both;
  display: table;
  overflow: auto; 
}

/* global styles */
#app{
  height: 100%;
}

.bg-wrap{
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
