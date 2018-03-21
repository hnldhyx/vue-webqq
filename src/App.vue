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

/* scroll */
::-webkit-scrollbar {/*滚动条整体样式*/
    width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 5px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 7px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
</style>
