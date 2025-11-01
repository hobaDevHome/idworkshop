(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[189,514,50,43],[0,514,50,114],[121,514,66,66],[1826,502,169,93],[52,514,67,66],[1542,0,500,500],[0,0,512,512],[514,0,512,512],[1028,0,512,512],[1542,502,140,131],[1684,502,140,131]]},
		{name:"index_atlas_2", frames: [[0,0,1717,1717]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Gemini_Generated_Image_c9paczc9paczc9paremovebgpreview = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom2pngcopy = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20251016_143850removebgpreview = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot_20251016_143850removebgpreviewpngcopy = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.startBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,93);


(lib.scr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.score = new cjs.Text("score", "30px 'Times New Roman'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 35;
	this.score.lineWidth = 100;
	this.score.parent = this;
	this.score.setTransform(80.95,14.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9BA39E").ss(1,1,1).p("ApckmIS5AAQBTAAA7A6QA6A7AABTIAAC9QAABTg6A7QgsAsg6ALQgTADgVAAIy5AAQgKAAgKgBQhGgGg0gzQg6g7AAhTIAAi9QAAgyAVgoQAOgcAXgYQA0gzBGgGQAKgBAKAAg");
	this.shape.setTransform(80.525,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#70A6A6").s().p("ApcEnIgUgBQhGgGg0gzQg6g7AAhTIAAi9QAAgxAVgpQAOgcAXgYQA0gzBGgGIAUgBIS5AAQBTAAA7A6QA6A7AABTIAAC9QAABTg6A7QgsAsg6ALQgTADgVAAg");
	this.shape_1.setTransform(80.525,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.score}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scr, new cjs.Rectangle(-1,-1,163.1,61), null);


(lib.rightBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pngwingcom2();
	this.instance.setTransform(29,10,0.0781,0.0781);

	this.instance_1 = new lib.Screenshot_20251016_143850removebgpreview();
	this.instance_1.setTransform(9,-14,0.5714,0.6107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-14,80,80);


(lib.retake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,66);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Gemini_Generated_Image_c9paczc9paczc9paremovebgpreview();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,400,400), null);


(lib.leftBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pngwingcom2pngcopy();
	this.instance.setTransform(-6,11,0.0781,0.0781);

	this.instance_1 = new lib.Screenshot_20251016_143850removebgpreviewpngcopy();
	this.instance_1.setTransform(-26,-5,0.5714,0.6107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-5,80,80);


(lib.imgHolder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(244,244,244,0.098)").ss(1,1,1).p("AzD0nMAmHAAAMAAAApPMgmHAAAg");
	this.shape.setTransform(152.025,169.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.047)").s().p("AzDUoMAAAgpPMAmHAAAMAAAApPg");
	this.shape_1.setTransform(152.025,169.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.imgHolder, new cjs.Rectangle(29.1,36.1,245.9,266), null);


(lib.finish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.finishText = new cjs.Text("Great job! ", "bold 40px 'Noto Sans'");
	this.finishText.name = "finishText";
	this.finishText.textAlign = "center";
	this.finishText.lineHeight = 63;
	this.finishText.lineWidth = 744;
	this.finishText.parent = this;
	this.finishText.setTransform(401.95,13.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9BA39E").ss(1,1,1).p("Eg+GgHCMB8NAAAIAAJBUg8kAKIg/pgKIg");
	this.shape.setTransform(397.475,45.1125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.finishText}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.finish, new cjs.Rectangle(-1,-1,797,92.2), null);


(lib.Symbol109 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(2.95,5.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.checkAnswer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.pngwingcom();
	this.instance.setTransform(0,0,0.0291,0.0291);

	this.instance_1 = new lib.pngwingcom1();
	this.instance_1.setTransform(0,0,0.0977,0.0977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.answer1 = new cjs.Text("ans1", "40px 'Times New Roman'", "#4F757B");
	this.answer1.name = "answer1";
	this.answer1.textAlign = "center";
	this.answer1.lineHeight = 46;
	this.answer1.lineWidth = 100;
	this.answer1.parent = this;
	this.answer1.setTransform(260,-94.9);

	this.timeline.addTween(cjs.Tween.get(this.answer1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9BA39E").ss(1,1,1).p("A/CmgMA+EAAAQE1AAAADeIAAGFQAADek1AAMg+EAAAQk0AAAAjeIAAmFQAAjeE0AAg");
	this.shape.setTransform(259.25,-68.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4E8E6").s().p("A/CGhQk0AAAAjeIAAmFQAAjeE0AAMA+FAAAQE0AAAADeIAAGFQAADek0AAg");
	this.shape_1.setTransform(259.25,-68.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(28.8,-111.1,461,85.39999999999999), null);


(lib.answerBtn4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.answer4 = new cjs.Text("ans4", "40px 'Times New Roman'", "#4F757B");
	this.answer4.name = "answer4";
	this.answer4.textAlign = "center";
	this.answer4.lineHeight = 46;
	this.answer4.lineWidth = 100;
	this.answer4.parent = this;
	this.answer4.setTransform(239,12.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9BA39E").ss(1,1,1).p("A/BmgMA+EAAAQE0AAAADeIAAGEQAADfk0AAMg+EAAAQk1AAAAjfIAAmEQAAjeE1AAg");
	this.shape.setTransform(244.4,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2ECD3").s().p("A/CGhQk0AAAAjfIAAmEQAAjeE0AAMA+FAAAQE0AAAADeIAAGEQAADfk0AAg");
	this.shape_1.setTransform(244.4,41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.answer4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.9,-1,461,85.4);


(lib.answerBtn3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.answer3 = new cjs.Text("ans3", "40px 'Times New Roman'", "#4F757B");
	this.answer3.name = "answer3";
	this.answer3.textAlign = "center";
	this.answer3.lineHeight = 46;
	this.answer3.lineWidth = 100;
	this.answer3.parent = this;
	this.answer3.setTransform(24.65,31.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9BA39E").ss(1,1,1).p("A/BmgMA+EAAAQE0AAAADeIAAGFQAADek0AAMg+EAAAQgYAAgXgBQkGgQAAjNIAAmFQAAjNEGgQQAXgBAYAAg");
	this.shape.setTransform(28.95,59.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9D1E1").s().p("A/CGhIgugBQkGgQAAjOIAAmEQAAjMEGgQQAXgCAXAAMA+FAAAQE0AAAADeIAAGEQAADfk0AAg");
	this.shape_1.setTransform(28.95,59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.answer3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerBtn3, new cjs.Rectangle(-201.5,17,461,85.4), null);


(lib.answerBtn2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.answer2 = new cjs.Text("ans2", "40px 'Times New Roman'", "#4F757B");
	this.answer2.name = "answer2";
	this.answer2.textAlign = "center";
	this.answer2.lineHeight = 46;
	this.answer2.lineWidth = 100;
	this.answer2.parent = this;
	this.answer2.setTransform(13,30.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9BA39E").ss(1,1,1).p("A/CmgMA+FAAAQE0AAAADfIAAGEQAADek0AAMg+FAAAQk0AAAAjeIAAmEQAAjfE0AAg");
	this.shape.setTransform(15.25,55.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5DCEE").s().p("A/CGhQk0AAAAjfIAAmEQAAjeE0AAMA+FAAAQE0AAAADeIAAGEQAADfk0AAg");
	this.shape_1.setTransform(15.25,55.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.answer2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.answerBtn2, new cjs.Rectangle(-215.2,12.9,461,85.39999999999999), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(3.7,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0,16.2,0.5,0.5);

	this.en_btn = new lib.Symbol109("synched",0);
	this.en_btn.name = "en_btn";
	this.en_btn.setTransform(16.25,32.5,1,1,0,0,0,16.4,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.en_btn}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,33.1,57);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {play:1,finish:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2];
	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage);
		stage.mouseChildren = true;
		this.stop();
		
		var gameStage = this;
		createjs.Sound.play("title");
		
		var backgroundImg;
		
		
		// تحميل ملف JSON
		fetch("data.json")
		  .then(response => response.json())
		  .then(data => {
		
		    // تحميل الخلفية
		    loadBackground(data.background);
		  })
		  .catch(error => console.error("Error loading JSON:", error));
		
		
		function loadBackground(bgPath) {
		  var loader = new createjs.LoadQueue();
		  loader.loadFile({ id: "bg", src: bgPath });
		  loader.on("fileload", function (evt) {
		    if (evt.item.id === "bg") {
		      backgroundImg = new createjs.Bitmap(evt.result);
		      backgroundImg.x = 0;
		      backgroundImg.y = 0;
		
		      gameStage.addChildAt(backgroundImg, 0);
		
		      bringElementsToFront();
		
		      stage.update();
		    }
		  });
		}
		
		// 🔸 ترتيب العناصر للأعلى
		function bringElementsToFront() {
		  if (gameStage.logo) {
		    gameStage.setChildIndex(gameStage.logo, gameStage.numChildren - 1);
		  }
		  if (gameStage.startBtn) {
		    gameStage.setChildIndex(gameStage.startBtn, gameStage.numChildren - 1);
		  }
		}
		
		gameStage.startBtn.removeAllEventListeners();
		gameStage.startBtn.addEventListener("click", startGame);
		
		function startGame() {
		  createjs.Sound.play("ClickSound");
		
		  bringElementsToFront();
		
		  let nextFrame = gameStage.currentFrame + 1;
		  gameStage.gotoAndStop(nextFrame);
		}
	}
	this.frame_1 = function() {
		this.stop();
		var gameStage = this;
		var questions = [];
		var currentIndex = 0;
		var total = 0;
		var scoreCount = 0;
		var language; // تُقرأ من JSON فقط
		
		// المراجع من الستيج
		var imgHolder = gameStage.imgHolder;
		var dataText = gameStage.dataText;
		var numText = gameStage.num;
		var scoreText = gameStage.scoreBox ? gameStage.scoreBox.score : null;
		var answerBtns = [
		    gameStage.answerBtn1,
		    gameStage.answerBtn2,
		    gameStage.answerBtn3,
		    gameStage.answerBtn4
		];
		var leftBtn = gameStage.leftBtn;
		var rightBtn = gameStage.rightBtn;
		
		var originalPositions = null;
		// ====== تحميل JSON ======
		function arrangeLayers() {
		    const bg = gameStage.getChildByName("background");
		    if (bg) gameStage.setChildIndex(bg, 0); // الخلفية دائمًا أسفل
		
		    // الطبقات التالية فوق الخلفية بالترتيب
		    const order = [
		        imgHolder,
		        dataText,
		        numText,
		        gameStage.scoreBox,
		        ...answerBtns,
		        gameStage.checkAnswer1,
		        gameStage.checkAnswer2,
		        gameStage.checkAnswer3,
		        gameStage.checkAnswer4,
		        leftBtn,
		        rightBtn,
		        gameStage.translate_btn
		    ];
		
		    order.forEach(el => {
		        if (el && gameStage.contains(el)) {
		            gameStage.setChildIndex(el, gameStage.numChildren - 1);
		        }
		    });
		}
		
		fetch("data.json")
		    .then(res => res.json())
		    .then(data => {
		        language = data.language; 
		        questions = data.questions ? data.questions.slice() : [];
		        total = questions.length;
		
		        if (gameStage.translate_btn) {
		            if (language === "ar") gameStage.translate_btn.gotoAndStop(1);
		            else gameStage.translate_btn.gotoAndStop(0);
		        }
		
		        // تحميل الخلفية (إن وجدت)
		// تحميل الخلفية (إن وجدت)
		if (data.background) {
		    // لا تنشئ خلفية جديدة إذا كانت موجودة بالفعل
		    var bg = gameStage.getChildByName("background");
		    if (!bg) {
		        bg = new createjs.Bitmap(data.background);
		        bg.name = "background";
		        bg.image.onload = function() {
		            bg.scaleX = 1128 / bg.image.width;
		            bg.scaleY = 635 / bg.image.height;
		        };
		        gameStage.addChildAt(bg, 0);
		    } else {
		        // فقط حدّث المصدر إن تغيّر
		        bg.image.src = data.background;
		    }
		}
		
		arrangeLayers();
		        preloadImages();
		    })
		    .catch(err => console.error("❌ خطأ في تحميل JSON:", err));
		
		// ======= احتفظ بهذه الدوال مباشرة بعد تعريف المتغيرات =======
		
		// تحفظ المواضع الأصلية إذا لم تكن محفوظة
		function captureOriginalPositions() {
		    if (originalPositions) return; // إذا كانت محفوظة فلا نعيدها
		    originalPositions = {
		        imgHolderX: imgHolder ? imgHolder.x : 0,
		        dataTextX: dataText ? dataText.x : 0,
		        scoreBoxX: gameStage.scoreBox ? gameStage.scoreBox.x : 0,
		        answersX: answerBtns.map(b => b ? b.x : 0),
		        checksX: [1,2,3,4].map(i => gameStage["checkAnswer"+i] ? gameStage["checkAnswer"+i].x : 0)
		    };
		}
		
		function resetFrame() {
		    // إعادة القيم الرقمية
		    questions = [];
		    currentIndex = 0;
		    total = 0;
		    scoreCount = 0;
		    language = null;
		
		    // 🔹 التأكد أن الخلفية موجودة وأسفل كل شيء
		    if (gameStage.children && gameStage.children.length) {
		        const bg = gameStage.children.find(c => c.name === "background");
		        if (bg) gameStage.setChildIndex(bg, 0); // اجعل الخلفية في أول طبقة (أسفل)
		    }
		
		    // تنظيف الصورة في الـ imgHolder
		    if (imgHolder) imgHolder.removeAllChildren();
		
		    // نصوص
		    if (dataText) {
		        dataText.text = "";
		        dataText.visible = true;
		        dataText.textAlign = "left";
		        dataText.direction = "ltr";
		    }
		    if (numText) {
		        numText.text = "";
		        numText.visible = true;
		    }
		    if (scoreText) {
		        scoreText.text = "✅ 0";
		        if (gameStage.scoreBox) gameStage.scoreBox.visible = true;
		    }
		
		    // أزرار الإجابات
		    answerBtns.forEach(btn => {
		        if (!btn) return;
		        btn.visible = true;
		        btn.mouseEnabled = false;
		        btn.alpha = 1;
		        if (btn.gotoAndStop) btn.gotoAndStop("up");
		        if (btn.removeAllEventListeners) btn.removeAllEventListeners();
		        gameStage.setChildIndex(btn, gameStage.numChildren - 1); // تأكد أنها فوق الخلفية
		    });
		
		    // إخفاء مؤشرات الصح والخطأ
		    for (let i = 1; i <= 4; i++) {
		        let check = gameStage["checkAnswer" + i];
		        if (check) {
		            check.visible = false;
		            if (originalPositions && originalPositions.checksX && originalPositions.checksX[i - 1] != null)
		                check.x = originalPositions.checksX[i - 1];
		            gameStage.setChildIndex(check, gameStage.numChildren - 1); // تأكد أنها فوق الأزرار
		        }
		    }
		
		    // إعادة مواضع العناصر الأصلية
		    if (originalPositions) {
		        if (imgHolder) imgHolder.x = originalPositions.imgHolderX;
		        if (dataText) dataText.x = originalPositions.dataTextX;
		        if (gameStage.scoreBox) gameStage.scoreBox.x = originalPositions.scoreBoxX;
		        answerBtns.forEach((btn, i) => {
		            if (btn && originalPositions.answersX[i] != null) btn.x = originalPositions.answersX[i];
		        });
		    }
		
		    // إعادة زر الترجمة وأزرار التنقل
		    if (gameStage.translate_btn) {
		        gameStage.translate_btn.gotoAndStop(0);
		        gameStage.setChildIndex(gameStage.translate_btn, gameStage.numChildren - 1);
		    }
		
		    if (leftBtn) leftBtn.visible = false;
		    if (rightBtn) rightBtn.visible = true;
		
		    // تأكد أن النصوص وعناصر الواجهة الأمامية فوق الخلفية
		    [dataText, numText, gameStage.scoreBox].forEach(el => {
		        if (el) gameStage.setChildIndex(el, gameStage.numChildren - 1);
		    });
		}
		// ======= استدعاء الحفظ والريسيت فوراً بعد تعريف العناصر =======
		// هذا يضمن أن originalPositions ليست فارغة، وأن العناصر ليست مخفية.
		captureOriginalPositions();
		resetFrame();
		
		
		
		
		// ====== خلط المصفوفة ======
		function shuffleArray(array) {
		    var arr = array ? array.slice() : [];
		    for (let i = arr.length - 1; i > 0; i--) {
		        let j = Math.floor(Math.random() * (i + 1));
		        [arr[i], arr[j]] = [arr[j], arr[i]];
		    }
		    return arr;
		}
		
		// ====== تحميل الصور مسبقًا ======
		var queue = new createjs.LoadQueue(false);
		queue.on("complete", onPreloadComplete, this);
		
		function preloadImages() {
		    var manifest = questions.map((q, i) => ({ id: "img" + i, src: q.imgSrc }));
		    if (manifest.length) queue.loadManifest(manifest);
		    else onPreloadComplete();
		}
		
		
		// ====== عند انتهاء التحميل ======
		function onPreloadComplete() {
		    showQuestion(currentIndex);
		    captureOriginalPositions();
		
		    // اللغة من JSON
		    if (language === "ar") {
		        applyLanguageLayout("ar");
		    } else {
		        applyLanguageLayout("en");
		    }
		
		    updateNavButtons();
		    updateScore();
		    enableOptions();
		}
		
		// ====== عرض السؤال ======
		function showQuestion(index) {
		    if (index >= questions.length) {
		        gameStage.gotoAndStop("finish");
		        imgHolder && imgHolder.removeAllChildren();
		        numText.text = "";
		        return;
		    }
		
		    for (let i = 1; i <= 4; i++) {
		        var c = gameStage["checkAnswer" + i];
		        if (c) c.visible = false;
		    }
		
		    var q = questions[index];
		    numText.text = (index + 1) + " / " + total;
		    dataText.text = q.question;
		    var shuffledAnswers = shuffleArray(q.answers || []);
		
		    showImageByIndex(index);
		
		    for (var i = 0; i < answerBtns.length; i++) {
		        var btn = answerBtns[i];
		        if (!btn) continue;
		
		        if (shuffledAnswers[i]) {
		            btn.visible = true;
		            btn.mouseEnabled = true;
		            if (btn.answerText) btn.answerText.text = shuffledAnswers[i];
		            else if (btn["answer" + (i + 1)]) btn["answer" + (i + 1)].text = shuffledAnswers[i];
		
		            if (btn.removeAllEventListeners) btn.removeAllEventListeners();
		            (function(localBtn, localIndex, localText){
		                localBtn.addEventListener("click", function(e){
		                    disableOptions();
		                    checkAnswer(localText, localIndex);
		                });
		            })(btn, i, shuffledAnswers[i]);
		
		            if (btn.gotoAndStop) btn.gotoAndStop("up");
		        } else {
		            btn.visible = false;
		            btn.mouseEnabled = false;
		            if (btn.removeAllEventListeners) btn.removeAllEventListeners();
		        }
		
		        var resClip = gameStage["checkAnswer" + (i + 1)];
		        if (resClip) resClip.visible = false;
		    }
		
		    q._shuffledAnswers = shuffledAnswers;
		}
		
		// ====== عرض الصورة ======
		function showImageByIndex(i) {
		    if (!imgHolder) return;
		    imgHolder.removeAllChildren();
		    var result = queue.getResult("img" + i);
		    if (result) {
		        var bmp = new createjs.Bitmap(result);
		        var iw = result.width || bmp.image.width;
		        var ih = result.height || bmp.image.height;
		        var holderW = 270, holderH = 320;
		        var scale = Math.min(holderW / iw, holderH / ih);
		        bmp.scaleX = bmp.scaleY = scale;
		        bmp.x = (holderW - iw * scale) / 2;
		        bmp.y = (holderH - ih * scale) / 2;
		        imgHolder.addChild(bmp);
		    }
		}
		
		// ====== فحص الإجابة ======
		function checkAnswer(selectedText, btnIndex) {
		    var q = questions[currentIndex];
		    var correct = q.correctAnswer;
		    var isCorrect = (selectedText === correct);
		    var checkClip = gameStage["checkAnswer" + (btnIndex + 1)];
		
		    if (checkClip) {
		        checkClip.visible = true;
		        checkClip.gotoAndStop(isCorrect ? 0 : 1);
		    }
		
		    // 🔸 فقط نفذ الـ Tween (الاهتزاز) عند الخطأ
		    var btn = answerBtns[btnIndex];
		    if (btn && !isCorrect) {
		        createjs.Tween.get(btn)
		            .to({ x: btn.x - 10 }, 50)
		            .to({ x: btn.x + 10 }, 50)
		            .to({ x: btn.x }, 50);
		    }
		
		    setTimeout(() => { if (checkClip) checkClip.visible = false; }, 1000);
		
		    if (isCorrect) {
		        createjs.Sound.play("right_answer");
		        scoreCount++;
		        updateScore();
		        setTimeout(() => {
		            currentIndex++;
		            showQuestion(currentIndex);
		            updateNavButtons();
		            enableOptions();
		        }, 1100);
		    } else {
		        createjs.Sound.play("wrong_answer");
		
		        // إظهار الإجابة الصحيحة فقط بدون Tween
		        for (var i = 0; i < answerBtns.length; i++) {
		            var aBtn = answerBtns[i];
		            if (!aBtn) continue;
		            var aText = aBtn.answerText ? aBtn.answerText.text :
		                (aBtn["answer" + (i + 1)] ? aBtn["answer" + (i + 1)].text : null);
		            if (aText === correct) {
		                if (aBtn.gotoAndStop) aBtn.gotoAndStop("correct");
		            }
		        }
		        setTimeout(() => { enableOptions(); }, 1100);
		    }
		}
		
		
		// ====== تفعيل وتعطيل الأزرار ======
		function enableOptions() {
		    answerBtns.forEach(btn => { if (btn) { btn.mouseEnabled = true; btn.alpha = 1; } });
		}
		function disableOptions() {
		    answerBtns.forEach(btn => { if (btn) { btn.mouseEnabled = false; btn.alpha = 0.8; } });
		}
		
		// ====== تحديث السكور ======
		function updateScore() {
		    if (scoreText) scoreText.text = "✅ " + scoreCount;
		}
		
		// ====== التنقل ======
		if (leftBtn) leftBtn.addEventListener("click", function() {
			createjs.Sound.play("ClickSound");
		    if (currentIndex > 0) { currentIndex--; showQuestion(currentIndex); updateNavButtons(); }
		});
		if (rightBtn) rightBtn.addEventListener("click", function() {
			createjs.Sound.play("ClickSound");
		    if (currentIndex < total - 1) { currentIndex++; showQuestion(currentIndex); updateNavButtons(); }
		});
		
		function updateNavButtons() {
		    if (leftBtn) leftBtn.visible = currentIndex > 0;
		    if (rightBtn) rightBtn.visible = currentIndex < total - 1;
		}
		
		// ====== زر الترجمة ======
		if (gameStage.translate_btn) {
		    let moved = false;
		    gameStage.translate_btn.addEventListener("click", function () {
		        moved = !moved;
		        gameStage.translate_btn.gotoAndStop(moved ? 1 : 0);
		        applyLanguageLayout(moved ? "ar" : "en");
		    });
		}
		
		// ====== الاتجاهات ======
		function applyLanguageLayout(lang) {
		    const rtl = (lang === "ar");
		    const rtlPositions = {
		        imgHolderX: 200,
		        dataTextX: 980,
		        scoreBoxX: 900,
		        answersX: [750, 750, 750, 750],
		        checksX: [480, 480, 480, 480]
		    };
		
		    if (!originalPositions) captureOriginalPositions();
		
		    if (rtl) {
		        if (dataText) {
		            dataText.textAlign = "right";
		            dataText.direction = "rtl";
		            createjs.Tween.get(dataText).to({ x: rtlPositions.dataTextX }, 300);
		        }
		        if (imgHolder) createjs.Tween.get(imgHolder).to({ x: rtlPositions.imgHolderX }, 300);
		        if (gameStage.scoreBox) createjs.Tween.get(gameStage.scoreBox).to({ x: rtlPositions.scoreBoxX }, 300);
		        answerBtns.forEach((btn, i) => { if (btn) createjs.Tween.get(btn).to({ x: rtlPositions.answersX[i] }, 300); });
		        for (let i = 1; i <= 4; i++) {
		            const check = gameStage["checkAnswer" + i];
		            if (check) createjs.Tween.get(check).to({ x: rtlPositions.checksX[i - 1] }, 300);
		        }
		    } else {
		        if (dataText) {
		            dataText.textAlign = "left";
		            dataText.direction = "ltr";
		            createjs.Tween.get(dataText).to({ x: originalPositions.dataTextX }, 300);
		        }
		        if (imgHolder) createjs.Tween.get(imgHolder).to({ x: originalPositions.imgHolderX }, 300);
		        if (gameStage.scoreBox) createjs.Tween.get(gameStage.scoreBox).to({ x: originalPositions.scoreBoxX }, 300);
		        answerBtns.forEach((btn, i) => { if (btn) createjs.Tween.get(btn).to({ x: originalPositions.answersX[i] }, 300); });
		        for (let i = 1; i <= 4; i++) {
		            const check = gameStage["checkAnswer" + i];
		            if (check) createjs.Tween.get(check).to({ x: originalPositions.checksX[i - 1] }, 300);
		        }
		    }
		}
	}
	this.frame_2 = function() {
		this.stop();
		var gameStage = this;
		
		// تأكد أن الخلفية أسفل جميع العناصر
		gameStage.setChildIndex(gameStage.finish, gameStage.numChildren - 1);
		gameStage.setChildIndex(gameStage.resetBtn, gameStage.numChildren - 1);
		
		// قراءة ملف JSON
		fetch("data.json")
		  .then(response => response.json())
		  .then(data => {
		    // تحديد اللغة
		    var lang = data.language || "en"; // القيمة الافتراضية English
		
		    // اختيار الرسالة وضبط الاتجاه والموقع
		    var finishMessage = "";
		    if (lang === "ar") {
		      finishMessage = data.finishResult.messageAR;
		
		      // إعدادات اللغة العربية
		          } else {
		      finishMessage = data.finishResult.messageEN;
		
		      // إعدادات اللغة الإنجليزية
		    }
		
		    // عرض الرسالة
		    gameStage.finish.finishText.text = finishMessage;
		  })
		  .catch(error => {
		    console.error("خطأ أثناء تحميل ملف JSON:", error);
		    gameStage.finish.finishText.text = "Error loading finish message.";
		  });
		
		// زر إعادة التشغيل
		gameStage.resetBtn.removeAllEventListeners();
		gameStage.resetBtn.addEventListener("click", reset);
		
		function reset() {
		  createjs.Sound.play("ClickSound");
		  gameStage.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(506,200,1,1,0,0,0,200,200);

	this.startBtn = new lib.startBtn();
	this.startBtn.name = "startBtn";
	this.startBtn.setTransform(502.5,453.5,1,1,0,0,0,84.5,46.5);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 1);

	this.translate_btn = new lib.Symbol1();
	this.translate_btn.name = "translate_btn";
	this.translate_btn.setTransform(1259.55,-220.7,1,1,0,0,0,16.4,28.5);

	this.checkAnswer4 = new lib.checkAnswer();
	this.checkAnswer4.name = "checkAnswer4";
	this.checkAnswer4.setTransform(546,441,1,1,0,0,0,25,25);

	this.checkAnswer3 = new lib.checkAnswer();
	this.checkAnswer3.name = "checkAnswer3";
	this.checkAnswer3.setTransform(546,352,1,1,0,0,0,25,25);

	this.checkAnswer2 = new lib.checkAnswer();
	this.checkAnswer2.name = "checkAnswer2";
	this.checkAnswer2.setTransform(546,262,1,1,0,0,0,25,25);

	this.checkAnswer1 = new lib.checkAnswer();
	this.checkAnswer1.name = "checkAnswer1";
	this.checkAnswer1.setTransform(546,173,1,1,0,0,0,25,25);

	this.scoreBox = new lib.scr();
	this.scoreBox.name = "scoreBox";
	this.scoreBox.setTransform(185.55,529.6,1,1,0,0,0,80.5,29.5);

	this.answerBtn4 = new lib.answerBtn4();
	this.answerBtn4.name = "answerBtn4";
	this.answerBtn4.setTransform(286.15,440.6,1,1,0,0,0,250,40);
	new cjs.ButtonHelper(this.answerBtn4, 0, 1, 1);

	this.leftBtn = new lib.leftBtn();
	this.leftBtn.name = "leftBtn";
	this.leftBtn.setTransform(451.05,541,1,1,0,0,0,27.5,40);
	new cjs.ButtonHelper(this.leftBtn, 0, 1, 1);

	this.rightBtn = new lib.rightBtn();
	this.rightBtn.name = "rightBtn";
	this.rightBtn.setTransform(589,533.5,1,1,0,0,0,27,33.5);
	new cjs.ButtonHelper(this.rightBtn, 0, 1, 1);

	this.num = new cjs.Text("", "30px 'Noto Sans Arabic SemiBold'");
	this.num.name = "num";
	this.num.textAlign = "center";
	this.num.lineHeight = 67;
	this.num.lineWidth = 109;
	this.num.parent = this;
	this.num.setTransform(523.6,526.15);

	this.imgHolder = new lib.imgHolder();
	this.imgHolder.name = "imgHolder";
	this.imgHolder.setTransform(825.85,275.25,1.1068,1.2121,0,0,0,152.1,169.1);

	this.answerBtn2 = new lib.answerBtn2();
	this.answerBtn2.name = "answerBtn2";
	this.answerBtn2.setTransform(284.3,263.7,1,1,0,0,0,19,58);
	new cjs.ButtonHelper(this.answerBtn2, 0, 1, 1);

	this.answerBtn3 = new lib.answerBtn3();
	this.answerBtn3.name = "answerBtn3";
	this.answerBtn3.setTransform(280.5,351.45,1,0.9524,0,0,0,28.9,58.3);
	new cjs.ButtonHelper(this.answerBtn3, 0, 1, 1);

	this.dataText = new cjs.Text("", "bold 40px 'Noto Sans'");
	this.dataText.name = "dataText";
	this.dataText.lineHeight = 63;
	this.dataText.lineWidth = 795;
	this.dataText.parent = this;
	this.dataText.setTransform(53.05,63.85);

	this.answerBtn1 = new lib.box();
	this.answerBtn1.name = "answerBtn1";
	this.answerBtn1.setTransform(280.5,173.05,1,0.8989,0,0,0,259.2,-68.5);
	new cjs.ButtonHelper(this.answerBtn1, 0, 1, 1);

	this.resetBtn = new lib.retake();
	this.resetBtn.name = "resetBtn";
	this.resetBtn.setTransform(504.2,380.5,1,1,0,0,0,33.5,33);
	new cjs.ButtonHelper(this.resetBtn, 0, 1, 1);

	this.finish = new lib.finish();
	this.finish.name = "finish";
	this.finish.setTransform(498.45,194.15,1,1,0,0,0,397.4,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startBtn},{t:this.logo}]}).to({state:[{t:this.answerBtn1},{t:this.dataText},{t:this.answerBtn3},{t:this.answerBtn2},{t:this.imgHolder},{t:this.num},{t:this.rightBtn},{t:this.leftBtn},{t:this.answerBtn4},{t:this.scoreBox},{t:this.checkAnswer1},{t:this.checkAnswer2},{t:this.checkAnswer3},{t:this.checkAnswer4},{t:this.translate_btn}]},1).to({state:[{t:this.finish},{t:this.resetBtn}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(562.1,38.8,714.1,554.5);
// library properties:
lib.properties = {
	id: '4E34B3481A5ADC4C85D9016987E04AF9',
	width: 1024,
	height: 576,
	fps: 30,
	color: "#E9F1FF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1761550217987", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1761550217987", id:"index_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4E34B3481A5ADC4C85D9016987E04AF9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;