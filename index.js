import anime from "./node_modules/animejs/lib/anime.es.js";

anime({
  targets: ".stroke",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


