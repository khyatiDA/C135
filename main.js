function setup(){
    canvas = createCanvas(500,550)  
    canvas.position(650,100)
  
    video = createCapture(VIDEO)
    video.size(500,500)
  
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
  }

  
  
  
  function modelLoaded(){
      console.log("PoseNet has been loaded")
  
    
  }

  function gotPoses(){
    if (results.length > 0) {
        console.log(results) 
     }
  }
  

  function draw(){
    background("white")
    
   
  }