function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('MobileNet',modelloaded);
  }
  function modelloaded(){
  console.log('Model loaded!!!!!!');
  }
  function draw(){
  image(video,0,0,400,300)
  classifier.classify(video,gotresult);
  };
  var previous_result='';
  function gotresult(error,result){
  console.log(result)
  if(error){
  console.error(error)  
  }  
  else{
  if(result[0].confidence>0.5 && previous_result!=result[0].label){
  pevious_result=result[0].label
  document.getElementById("result_label").innerHTML=result[0].label;
  document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3)
  var synth=window.speechSynthesis;
  speakdata="object detected is-"+result[0].label
  var utterthis=new SpeechSynthesisUtterance(speakdata);
  synth.speak(utterthis);
  }
  }
  }
  
  
  
  