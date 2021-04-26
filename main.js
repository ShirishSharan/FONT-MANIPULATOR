noseY=0;
noseX=0;

diffrence=0;
leftWristX=0;
rightWristX=0;

function setup(){
 video = createCapture(VIDEO);
 video.size(350,350);
 canvas = createCanvas(400,400);
 canvas.position(500,250);
 poseNet = ml5.poseNet(video , modelLoaded);
 poseNet.on('pose' , gotPoses);

}
 

function modelLoaded(){
    console.log('Intialize Model Loaded !');
}





function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX +  "noseY = " + noseY);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        diffrence= leftWristX - rightWristX;
    }

        
    
}

function draw() {
    background("white");
    
    fill("black")
    stroke("yellow");
    text("Namaste🙏🏻" , noseX , noseY , diffrence)
    //shade("blue");
    
    
    
    

}
