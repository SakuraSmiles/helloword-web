<template>
  <div id="app">
    <router-view class="content"></router-view>
    <div class="center-logo">
    </div>
    <vue-particles color="#fff"
                   :particleOpacity="0.7"
                   :particlesNumber="30"
                   shapeType="circle"
                   :particleSize="3"
                   linesColor="#fff"
                   :linesWidth="0.5"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="100"
                   :moveSpeed="4"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push"
                   class="particles-js">
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  margin: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #0e1421;
}
#app {
  height: 100%;
  width: 100%;
}
.center-logo {
  position: absolute;
  height: 400px;
  width: 600px;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -300px;
  background-size: contain;
  background: no-repeat center center;
  background-image: url("./assets/img/helloworld_h70.png");
}
.center-logo img {
  max-width: 600px;
  max-height: 400px;
}
.particles-js {
  height: 100%;
  width: 100%;
  position: absolute;
  top:0;
  z-index: 0;
  /**background-image: url("./assets/img/index_background.gif");**/
}
.content{
  position: relative;
  z-index: 20;
  min-height: 100%;
}
</style>
