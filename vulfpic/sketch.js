var img;

var imgCount;
var imgCountSlider;

var xSlider;
var ySlider;

var xSizeSlider;
var ySizeSlider;

var xDispSlider;
var yDispSlider;
var propCheck;
var propCrop;
var imgRatio;


function setup() {
  createCanvas(800, 800);


  imgCountSlider = createSlider(1, 7, 3);
  imgSpacing = 25;
  img = loadImage("A_magical_kitten.png");
  imageMode(CENTER);

  xSlider = createSlider(0, width, width / 2);
  ySlider = createSlider(0, height, height / 2);
  xSizeSlider = createSlider(0, 200, 100);
  ySizeSlider = createSlider(0, 200, 100);
  propCheck = createCheckbox('Proportional', false);
  propCheck.changed(proportional);

  xDispSlider = createSlider(0, 100, 25);
  yDispSlider = createSlider(0, 100, 25);
}

function draw() {
  background(0, 255, 200);
  imgCount = imgCountSlider.value();
  xDisp = xDispSlider.value();
  yDisp = yDispSlider.value();

  var xSize = map(xSizeSlider.value(), 0, 200, 0, img.width);
  var ySize = map(ySizeSlider.value(), 0, 200, 0, img.height);

  if (propCrop) {
    ySize = (xSize / img.width) * img.height;
    ySizeSlider.value(ySize * 200 / img.height);
  }


  for (var i = imgCount-1; i >= 0 ;  i--) {
    var w = xSlider.value() + i*xDisp;
    var h = ySlider.value() + i*yDisp;
    image(img, w, h, xSize, ySize);
  }
}


function proportional() {
  if (propCheck.checked()) {
    console.log("checked");
    propCrop = true;
    ySizeSlider.attribute("disabled", true);
  } else {
    propCrop = false;
    ySizeSlider.removeAttribute("disabled");
    console.log("unchecked");
  }


}
