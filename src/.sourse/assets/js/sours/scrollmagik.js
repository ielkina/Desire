var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onLeave",
    duration: "200%",
  },
});
var slides = document.querySelectorAll("section.panel");
for (var i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: slides[i],
  })
    .setPin(slides[i], { pushFollowers: false })
    .addTo(controller);
}
new ScrollMagic.Scene({
  triggerElement: slides[2],
  triggerHook: 0.9,
  duration: "80%",
  offset: 50,
})
  .setClassToggle("#hat", "visible")
  .addTo(controller);
//выезжающие элементы
/* <script>
	// init controller
	var controller = new ScrollMagic.Controller();
</script>
<div class="spacer s1"></div>
<div id="trigger4" class="spacer s1"></div>
<div class="spacer s0"></div>
<div class="animate4 box2 black outline" style="left: 700px;">
	<p>Tchoo Tchoo!</p>
	<a href="#" class="viewsource">view source</a>
</div>
<div class="animate4 box2 black outline" style="left: 700px;"></div>
<div class="animate4 box2 black outline" style="left: 700px;"></div>
<div class="animate4 box2 black outline" style="left: 700px;"></div>
<div class="animate4 box2 black outline" style="left: 700px;"></div>
<div class="animate4 box2 black outline" style="left: 700px;"></div>
<div class="animate4 box2 black outline" style="left: 700px;"></div>
<div class="animate4 box2 black outline" style="left: 700px;"></div>
<div class="animate4 box2 black outline" style="left: 700px;"></div>
<div class="animate4 box2 black outline" style="left: 700px;"></div>
<div class="spacer s2"></div>
<script>
	// build tween
	var tween = TweenMax.staggerFromTo(".animate4", 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 300})
					.setTween(tween)
					.addIndicators({name: "staggering"}) // add indicators (requires plugin)
					.addTo(controller);

</script> */
