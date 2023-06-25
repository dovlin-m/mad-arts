import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('~/assets/images/lazyload/error.jpg'),
  loading: require('~/assets/images/lazyload/error.jpg'),
  attempt: 3,
  listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'],
});
