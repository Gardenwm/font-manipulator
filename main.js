function setup()
{
    video = createCapture(VIDEO);
    video.size(600, 600);

    canvas = createCanvas(700, 700);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded()
{
    console.log('posenet initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}
