window.addEventListener("load",function() {
//--application start
var Q = Quintus().include("Sprites, Scenes, Input, 2D , Touch, UI").setup({ maximize: true });



Q.scene("helloworld",function(stage) {
  var label = stage.insert(new Q.UI.Text({
    x: Q.width/2, 
    y: Q.height/2,
    label: stage.options.label
  }));
});

// Stage a scene on stage 0 and pass in a label
Q.stageScene("helloworld",0, { 
  label: "This is the label"
}); 
//--application end
});