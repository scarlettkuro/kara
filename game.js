window.addEventListener("load",function() {
//--application start
var Q = Quintus().include("Sprites, Scenes, Input, 2D , Touch, UI").setup({ maximize: true });


Q.scene('helloworld',function(stage) {
    var container = stage.insert(new Q.UI.Container({
      x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0.5)"
    }));
    
    var button = container.insert(new Q.UI.Button({ x: 0, y: 0, fill: "#CCCCCC",
                                             label: "Well, we've started" }));  

        container.fit(20);
  });
  
Q.stageScene("helloworld");
//--application end
});