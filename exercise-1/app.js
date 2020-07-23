new Vue({
  el: '#exercise',
  data: {
    name: 'Daniel Otieno',
    age: 25,
    inputValue: 'Daniel Otieno',
  },
  methods: {
    multipleAgeBy3: function () {
      return this.age * 3;
    },
    getRandomNum: function () {
      return Math.random();
    },
  },
});
