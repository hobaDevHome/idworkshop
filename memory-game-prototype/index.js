(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,222,90]]}
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



(lib.Image_39 = function() {
	this.initialize(img.Image_39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4268,2396);


(lib.Bitmap1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
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


(lib.Symbol2copy3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-111,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2copy3, new cjs.Rectangle(-111,-45,222,90), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		stage.mouseChildren = true; 
		var gameStage = this;
		gameStage.start_btn.addEventListener('click', goNextFrame);
		function goNextFrame() {
			createjs.Sound.play("button");
			gameStage.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		var stage = this.stage;
		
		// ================= VARIABLES =================
		var deck = new createjs.Container();
		stage.addChild(deck);
		
		var frontItems = []; // هتيجي من JSON
		var totalCards;
		var faces = [];
		var prevFace;
		var face;
		var presses = 0;
		var canClick = true;
		
		var backImageURL = "assets/back.jpeg";
		var useBackImage = true;
		var gameData;
		var header;
		var pairsText;
		var pairsFound = 0;
		var totalPairs;
		
		// ================= LOAD JSON FIRST =================
		var loader = new createjs.LoadQueue();
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleJSONComplete);
		
		// أول حاجة نحمل ملف JSON فقط
		loader.loadFile({ id: "jsonData", src: "data.json" });
		
		function handleFileLoad(event) {
		  if (event.item.id === "jsonData") {
		    gameData = event.result;
		  }
		}
		
		function handleJSONComplete() {
		  if (!gameData) {
		    console.error("❌ لم يتم تحميل ملف JSON بنجاح!");
		    return;
		  }
		
		  // بعد تحميل JSON نعيّن الـ frontItems
		   frontItems = gameData.frontItems.slice(0, 10);
		  totalCards = frontItems.length * 2;
		  totalPairs = totalCards / 2;
		
		  // نحمل الصور (back + front + background)
		  var assetsLoader = new createjs.LoadQueue();
		
		  if (useBackImage) assetsLoader.loadFile({ id: "back", src: backImageURL });
		
		  // تحميل الخلفية لو نوعها صورة
		  if (gameData.background && gameData.background.type === "image") {
		    assetsLoader.loadFile({ id: "background", src: gameData.background.value });
		  }
		
		  frontItems.forEach((item, i) => {
		    if (item.type === "image") {
		      assetsLoader.loadFile({ id: "front" + i, src: item.value });
		    }
		  });
		
		  // بعد تحميل الصور كلها نبدأ
		  assetsLoader.addEventListener("complete", function () {
		    loader = assetsLoader;
		    createBackground();
		    createHeader();
		    start();
		  });
		}
		
		// ================= CREATE BACKGROUND =================
		function createBackground() {
		  if (stage.getChildByName("background")) {
		    stage.removeChild(stage.getChildByName("background"));
		  }
		
		  if (gameData.background && gameData.background.type === "image") {
		    var bmp = new createjs.Bitmap(loader.getResult("background"));
		    scaleImageFill(bmp, stage.canvas.width, stage.canvas.height);
		    bmp.name = "background";
		    stage.addChildAt(bmp, 0);
		  } else if (gameData.background && gameData.background.type === "color") {
		    var bg = new createjs.Shape();
		    bg.graphics.beginFill(gameData.background.value).drawRect(0, 0, stage.canvas.width, stage.canvas.height);
		    bg.name = "background";
		    stage.addChildAt(bg, 0);
		  } else {
		    var defaultBg = new createjs.Shape();
		    defaultBg.graphics.beginFill("#7cb342").drawRect(0, 0, stage.canvas.width, stage.canvas.height);
		    defaultBg.name = "background";
		    stage.addChildAt(defaultBg, 0);
		  }
		}
		
		// ================= HEADER =================
		function createHeader() {
		  header = new createjs.Container();
		  stage.addChild(header);
		  header.width = stage.canvas.width;
		  var headerHeight = 60;
		  var headerBg = new createjs.Shape();
		  headerBg.graphics.beginFill("#558b2f").drawRect(0, 0, stage.canvas.width, headerHeight);
		  header.addChild(headerBg);
		
		  var isEn = gameData.lang === "en"; // تحقق من اللغة
			console.log(gameData.lang)
		  // ===== Game Title =====
		  var gameTitle = new createjs.Text(gameData.title || "Memory Game", "bold 22px Arial", "#fff");
		  gameTitle.textAlign = isEn ? "left" : "right";
		  gameTitle.textBaseline = "middle";
		  gameTitle.x = isEn ? 15 : header.width - 650; // Title على اليسار لو EN وعلى اليمين لو AR
		  gameTitle.y = headerHeight / 2;
		  header.addChild(gameTitle);
		
		  // ===== Pairs Text =====
		  var pairsLabel = isEn ? "match : " : "تطابق :";
		  pairsText = new createjs.Text(`${pairsLabel} ${pairsFound} / ${totalPairs}`, "16px Arial", "#fff");
		  pairsText.textAlign = isEn ? "right" : "left"; // عكس الـ Title
		  pairsText.textBaseline = "middle";
		  pairsText.x = isEn ? header.width - 650 : 15; // الطرف الآخر
		  pairsText.y = headerHeight / 2;
		  header.addChild(pairsText);
		}
		
		
		// ================= START GAME =================
		function start() {
		  createCards(totalCards);
		  faces = getRandomArray(totalCards);
		  setFaces(faces, totalCards);
		  deck.addEventListener("click", onClickDeck);
		  stage.update();
		}
		
		// ================= CREATE CARDS =================
		function createCards(count) {
		  var cardWidth = 120;
		  var cardHeight = 150;
		  var maxCols = 7; // أقصى عدد أعمدة ثابت
		  var cols = Math.min(count, maxCols); // عدد الأعمدة = أقل بين العدد الكلي و7
		  var rows = Math.ceil(count / cols);
		
		  var spacingX = 10; // مسافة أفقية متساوية
		  var spacingY = 15;
		
		  var headerHeight = 60;
		  var startY = headerHeight + 20;
		
		  for (var i = 0; i < count; i++) {
		    var card = new createjs.Container();
		    card.width = cardWidth;
		    card.height = cardHeight;
		    card.cursor = "pointer";
		
		    // back
		    if (useBackImage) {
		      var backContainer = new createjs.Container();
		      var borderBack = new createjs.Shape();
		      borderBack.graphics.beginFill("#ffffff").drawRoundRect(0, 0, cardWidth, cardHeight, 12);
		      backContainer.addChild(borderBack);
		
		      var back = new createjs.Bitmap(loader.getResult("back"));
		      scaleImageFill(back, cardWidth - 8, cardHeight - 8);
		      back.x = -8;
		      back.y = 4;
		
		      var mask = new createjs.Shape();
		      mask.graphics.beginFill("#000").drawRoundRect(4, 4, cardWidth - 8, cardHeight - 8, 10);
		      back.mask = mask;
		      backContainer.addChild(mask);
		      backContainer.addChild(back);
		
		      card.back = backContainer;
		      card.addChild(backContainer);
		    }
		
		    // front
		    var frontContainer = new createjs.Container();
		    frontContainer.visible = false;
		    var frontBg = new createjs.Shape();
		    frontBg.graphics.beginFill("#ffffff").drawRoundRect(0, 0, cardWidth, cardHeight, 12);
		    frontContainer.addChild(frontBg);
		    card.front = frontContainer;
		    card.addChild(frontContainer);
		
		    // hover
		    card.on("mouseover", function () {
		      if (canClick && !this.front.visible) {
		        createjs.Tween.get(this).to({ scaleX: 1.08, scaleY: 1.08 }, 150);
		        this.shadow = new createjs.Shadow("#000000", 0, 8, 20);
		        stage.update();
		      }
		    });
		    card.on("mouseout", function () {
		      createjs.Tween.get(this).to({ scaleX: 1, scaleY: 1 }, 150);
		      this.shadow = null;
		      stage.update();
		    });
		
		    var col = i % cols;
		    var row = Math.floor(i / cols);
		
		    card.x = spacingX + col * (cardWidth + spacingX);
		    card.y = startY + row * (cardHeight + spacingY);
		
		    deck.addChild(card);
			deck.x = 50;
		  }
		}
		
		
		// ================= LOGIC =================
		function getRandomArray(max) {
		  var array = [];
		  for (var i = 0; i < max / 2; i++) {
		    array.push(i);
		    array.push(i);
		  }
		  for (var j = array.length - 1; j > 0; j--) {
		    var rand = Math.floor(Math.random() * (j + 1));
		    var temp = array[j];
		    array[j] = array[rand];
		    array[rand] = temp;
		  }
		  return array;
		}
		
		function setFaces(array, max) {
		  for (var i = 0; i < max; i++) {
		    (function (i) {
		      var card = deck.getChildAt(i);
		      var idx = array[i];
		      card.value = idx;
		      var item = frontItems[idx];
		
		      while (card.front.children.length > 1) card.front.removeChildAt(1);
		
		      if (item.type === "text") {
		        var txt = new createjs.Text(item.value, "70px Arial", "#7cb342");
		        txt.textAlign = "center";
		        txt.textBaseline = "middle";
		        txt.x = card.width / 2;
		        txt.y = card.height / 2;
		        card.front.addChild(txt);
		      } else if (item.type === "image") {
		        var bmp = new createjs.Bitmap(loader.getResult("front" + idx));
		        scaleImageFill(bmp, card.width - 8, card.height - 8);
		        bmp.x = 4;
		        bmp.y = 4;
		        var mask = new createjs.Shape();
		        mask.graphics.beginFill("#000").drawRoundRect(4, 4, card.width - 8, card.height - 8, 10);
		        bmp.mask = mask;
		        card.front.addChild(mask);
		        card.front.addChild(bmp);
		      }
		    })(i);
		  }
		}
		
		// ================= HELPERS =================
		function scaleImageFill(bitmap, targetWidth, targetHeight) {
		  const img = bitmap.image;
		  if (!img || !img.width || !img.height) return;
		
		  const scaleX = targetWidth / img.width;
		  const scaleY = targetHeight / img.height;
		  const scale = Math.max(scaleX, scaleY);
		  bitmap.scaleX = bitmap.scaleY = scale;
		
		  const newWidth = img.width * scale;
		  const newHeight = img.height * scale;
		
		  bitmap.x = (targetWidth - newWidth) / 2;
		  bitmap.y = (targetHeight - newHeight) / 2;
		}
		
		// ================= FLIP CARDS =================
		function onClickDeck(e) {
		  if (!canClick) return;
		  var target = e.target;
		  face = null;
		  while (target && target != deck) {
		    if (target.front && target.back) {
		      face = target;
		      break;
		    }
		    target = target.parent;
		  }
		
		  if (face && face.front) {
		    if (!face.front.visible) {
		      canClick = false;
		      flipCard(face, true, function () {
		        presses++;
		        if (presses % 2 == 1) {
		          prevFace = face;
		          canClick = true;
		        } else {
		          if (face.value == prevFace.value) {
		            face.mouseEnabled = true;
		            prevFace.mouseEnabled = true;
		            pairsFound++;
		            pairsText.text = `Pairs ${pairsFound} / ${totalPairs}`;
		            stage.update();
		            canClick = true;
		          } else {
		            setTimeout(function () {
		              flipCard(face, false);
		              flipCard(prevFace, false, function () {
		                canClick = true;
		              });
		            }, 100);
		          }
		        }
		      });
		    }
		  }
		}
		
		function flipCard(card, showFront, callback) {
		  createjs.Tween.get(card)
		    .to({ scaleX: 0 }, 200)
		    .call(function () {
		      card.front.visible = showFront;
		      card.back.visible = !showFront;
		    })
		    .to({ scaleX: 1 }, 200)
		    .call(function () {
		      stage.update();
		      if (callback) callback();
		    });
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// main
	this.start_btn = new lib.Symbol2copy3();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(511.95,498.85);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 1);

	this.instance = new lib.Image_39();
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.start_btn}]}).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024.3,575);
// library properties:
lib.properties = {
	id: 'B431FA39269F53479FD6BFDB20E5127A',
	width: 1024,
	height: 576,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image_39.png?1760882322615", id:"Image_39"},
		{src:"images/index_atlas_1.png?1760882322607", id:"index_atlas_1"}
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
an.compositions['B431FA39269F53479FD6BFDB20E5127A'] = {
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