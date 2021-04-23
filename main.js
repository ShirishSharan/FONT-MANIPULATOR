function setup(){
 video = createCapture(VIDEO);
 video.size(350,350);
 canvas = createCanvas(400,400);
 canvas.position(500,250);
 pose = ml5.poseNet(video , modelLoaded);
 pose.on('pose' , gotPoses);

}
 

function modelLoaded(){
    console.log('Intialize Model Loaded !');
}



function draw() {
    background("black");
    
}

function gotPoses(results)
{
    if(length.results > 0)
    {
        console.log(results);
    }
        
    
}
