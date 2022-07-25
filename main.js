song ="";
lWx=0;lWy=0;rWx=0;rWy=0;
LeftScore = 0;
RightScore = 0;



    function preload(){
        song = loadSound("aVeryShortName.mp3");
        
        }
        function setup(){
            canvas = createCanvas(600, 500);
            canvas.position(450, 210);
            video = createCapture(VIDEO);
            video.hide();
            poseNet = ml5.poseNet(video, modelLoaded);
            poseNet.on('pose', gotPoses);
        }
        function draw(){
            image(video, 0, 0, 600, 500);
            fill("red");
            stroke("darkgrey");
            
            circle(rWx, rWy, 22);
            if(LeftScore => 0.3){

            
            circle(lWx, lWy, 22);
            
            
            volume =floor(Number(lWy)) / 500;
            
            document.getElementById("rD").innerHTML = "Volume: " + volume;  
            song.setVolume(volume);
        }
        if(rWy > 0 && rWy <= 100){
            document.getElementById("lD").innerHTML = "Speed = 0.5x";
            song.rate(0.5);

        }
        else if(rWy > 100 && rWy <= 200){
            document.getElementById("lD").innerHTML = "Speed = 1x";
            song.rate(1);

        }
        else if(rWy > 200 && rWy <= 300){
            document.getElementById("lD").innerHTML = "Speed = 1.5x";
            song.rate(1.5);

        }
        else if(rWy > 300 && rWy <= 400){
            document.getElementById("lD").innerHTML = "Speed = 2x";
            song.rate(2);

        }
        else if(rWy > 400 && rWy <= 5.00){
            document.getElementById("lD").innerHTML = "Speed = 3x";
            song.rate(3);

        }
        }

        function playSound(){
            song.play();
            song.setVolume(1);
            song.rate(1);
            
        }
        function modelLoaded(){
            console.log("Model 'POSENET' Loaded");

            
        }

        function gotPoses(results){
            if (results.length > 0){
                console.log(results);
                lWx = results[0].pose.leftWrist.x;
                rWx = results[0].pose.rightWrist.x;
                lWy = results[0].pose.leftWrist.y;
                rWy = results[0].pose.rightWrist.y;
                console.log("Left Wrist X(lWx): "+ lWx + ", Left Wrist Y(lWy): " + lWy);
                console.log("Right Wrist X(rWx): "+ rWx + ", Right Wrist Y(rWy): " + rWy);
                LeftScore = results[0].pose.keypoints[9].score;
                RightScore = results[0].pose.keypoints[10].score;
            }
        }


        


