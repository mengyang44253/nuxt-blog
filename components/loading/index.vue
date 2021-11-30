<template lang="html">
  <div class="loading-page" v-if="loading">
    <div class="loader">
      <div>努</div>
      <div>力</div>
      <div>加</div>
      <div>载</div>
      <div>中</div>
      <div>...</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="less">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  font-family: sans-serif;
  .loader{
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%,-50%);
    -o-transform: translate(-50%, -50%);
    -mos-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    cursor: default;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    div{
      position: relative;
      width: 2.5em;
      height: 2.5em;
      background-color: #fff;
      border-radius: 100%;
      -moz-border-radius: 100%;
      -webkit-border-radius: 100%;
      margin: 0 5px;
      float: left;
      font-size: 1.65em;
      line-height: 2.5em;
      animation: bounce 1.5s infinite ease-in-out;
      -o-animation: bounce 1.5s infinite ease-in-out;
      -mos-animation: bounce 1.5s infinite ease-in-out;
      -moz-animation: bounce 1.5s infinite ease-in-out;
      -webkit-animation: bounce 1.5s infinite ease-in-out;
      &::after{
        content:"";
        position: absolute;
        bottom: -2em;
        left: 0.35em;
        width: 1.8em;
        height: 0.5em;
        background-color: #233122;
        border-radius: 100%;
        -moz-border-radius: 100%;
        -webkit-border-radius: 100%;
      }
      &:nth-child(1){
        color: #fff;
        background-color: #027fff;
        animation-delay: 0ms;
        -o-animation-delay: 0ms;
        -ms-animation-delay:0ms;
        -moz-animation-delay: 0ms;
        -webkit-animation-delay: 0ms;
        animation: bouncefirst 1.5s infinite ease-in-out;
        -o-animation: bouncefirst 1.5s infinite ease-in-out;
        -mos-animation:bouncefirst 1.5s infinite ease-in-out;
        -moz-animation: bouncefirst 1.5s infinite ease-in-out;
        -webkit-animation: bouncefirst 1.5s infinite ease-in-out;
      }
      &:nth-child(2){
        color: #fff;
        background-color: #027fff;
        animation-delay: 50ms;
        -o-animation-delay: 50ms;
        -ms-animation-delay:50ms;
        -moz-animation-delay: 50ms;
        -webkit-animation-delay: 50ms;
      }
      &:nth-child(3){
        color: #fff;
        background-color: #027fff;
        animation-delay: 100ms;
        -o-animation-delay: 100ms;
        -ms-animation-delay:100ms;
        -moz-animation-delay: 100ms;
        -webkit-animation-delay: 100ms;
      }
      &:nth-child(4){
        color: #fff;
        background-color: #027fff;
        animation-delay: 150ms;
        -o-animation-delay: 150ms;
        -ms-animation-delay:150ms;
        -moz-animation-delay: 150ms;
        -webkit-animation-delay: 150ms;
      }
      &:nth-child(5){
        color: #fff;
        background-color: #99d3d4;
        animation-delay: 200ms;
        -o-animation-delay: 200ms;
        -ms-animation-delay:200ms;
        -moz-animation-delay: 200ms;
        -webkit-animation-delay: 200ms;
      }
      &:nth-child(6){
        color: #fff;
        background-color: #56bebf;
        animation-delay: 250ms;
        -o-animation-delay: 250ms;
        -ms-animation-delay:250ms;
        -moz-animation-delay: 250ms;
        -webkit-animation-delay: 250ms;
      }
      &:nth-child(7){
        color: #fff;
        background-color: #13a3a5;
        animation-delay: 250ms;
        -o-animation-delay: 250ms;
        -ms-animation-delay:250ms;
        -moz-animation-delay: 250ms;
        -webkit-animation-delay: 250ms;
      }
    }
  }
}
@keyframes bounce {
  0% {
    transform: translateX(0px);
  }
  20% {
    transform: translateX(0px);
  }
  28% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(100px);
  }
  80%,
  100% {
    transform: translateX(0px);
  }
}

@-o-keyframes bounce {
  0% {
    -o-transform: translateX(0px);
  }
  20% {
    -o-transform: translateX(0px);
  }
  28% {
    -o-transform: translateX(0px);
  }
  50% {
    -o-transform: translateX(100px);
  }
  80%,
  100% {
    -o-transform: translateX(0px);
  }
}

@-mos-keyframes bounce {
  0% {
    -mos-transform: translateX(0px);
  }
  20% {
    -mos-transform: translateX(0px);
  }
  28% {
    -mos-transform: translateX(0px);
  }
  50% {
    -mos-transform: translateX(100px);
  }
  80%,
  100% {
    -mos-transform: translateX(0px);
  }
}

@-moz-keyframes bounce {
  0% {
    -moz-transform: translateX(0px);
  }
  20% {
    -moz-transform: translateX(0px);
  }
  28% {
    -moz-transform: translateX(0px);
  }
  50% {
    -moz-transform: translateX(100px);
  }
  80%,
  100% {
    -moz-transform: translateX(0px);
  }
}

@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translateX(0px);
  }
  20% {
    -webkit-transform: translateX(0px);
  }
  28% {
    -webkit-transform: translateX(0px);
  }
  50% {
    -webkit-transform: translateX(100px);
  }
  80%,
  100% {
    -webkit-transform: translateX(0px);
  }
}

@keyframes bouncefirst {
  0% {
    transform: translateX(0px);
  }
  20% {
    transform: translateX(-50px);
  }
  25% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(100px);
  }
  80%,
  100% {
    transform: translateX(0px);
  }
}

@-o-keyframes bouncefirst {
  0% {
    -o-transform: translateX(0px);
  }
  20% {
    -o-transform: translateX(-50px);
  }
  25% {
    -o-transform: translateX(-50px);
  }
  50% {
    -o-transform: translateX(100px);
  }
  80%,
  100% {
    -o-transform: translateX(0px);
  }
}

@-mos-keyframes bouncefirst {
  0% {
    -mos-transform: translateX(0px);
  }
  20% {
    -mos-transform: translateX(-50px);
  }
  25% {
    -mos-transform: translateX(-50px);
  }
  50% {
    -mos-transform: translateX(100px);
  }
  80%,
  100% {
    -mos-transform: translateX(0px);
  }
}

@-moz-keyframes bouncefirst {
  0% {
    -moz-transform: translateX(0px);
  }
  20% {
    -moz-transform: translateX(-50px);
  }
  25% {
    -moz-transform: translateX(-50px);
  }
  50% {
    -moz-transform: translateX(100px);
  }
  80%,
  100% {
    -moz-transform: translateX(0px);
  }
}

@-webkit-keyframes bouncefirst {
  0% {
    -webkit-transform: translateX(0px);
  }
  20% {
    -webkit-transform: translateX(-50px);
  }
  25% {
    -webkit-transform: translateX(-50px);
  }
  50% {
    -webkit-transform: translateX(100px);
  }
  80%,
  100% {
    -webkit-transform: translateX(0px);
  }
}
</style>
