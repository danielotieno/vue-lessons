new Vue({
  el: '#app',
  data: {
    title: 'Hello Vue2 Intro',
    link: 'https://vuejs.org/',
  },
  methods: {
    sayHello: function () {
      return this.title;
    },
  },
});
