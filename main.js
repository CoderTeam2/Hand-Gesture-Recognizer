var data = "";

Webcam.set({
    width: 300,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 100
});

Webcam.attach("#webcam");


function selfie() {
    Webcam.snap(function(data_uri){
        document.getElementById("preview").innerHTML = "<img id='img' src=" + data_uri + ">";
    });
}

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oMm7mdyZt/model.json", model);

function model() {
    console.log(ml5.version);
}

function check() {
    var img = document.getElementById("img")
    classifier.classify(img, gotResult);
}

function speak(){
    var speak_data = "The gesture recognised by your hand is "+data;
    var speakbot = window.speechSynthesis;
    var Utter = new SpeechSynthesisUtterance(speak_data);
    speakbot.speak(Utter);
}

function gotResult(error, results) {
    if (error) {
        console.error = error;
    } else {
        data = results[0].label;
        if (results[0].label = "Thumbs Up") {
            document.getElementById("prediction_image").innerHTML = "&#128077;";
            document.getElementById("prediction").innerHTML = "Thumbs Up";
            speak("Thumbs Up");
        } else if (results[0].label = "Thumbs Down") {
            document.getElementById("prediction_image").innerHTML = "&#128078;";
            document.getElementById("prediction").innerHTML = "Thumbs Down";
            speak("Thumbs Down");
        } else if (results[0].label = "Attention") {
            document.getElementById("prediction_image").innerHTML = "&#9757;";
            document.getElementById("prediction").innerHTML = "Attention";
            speak("Attention");
        } else if (results[0].label = "Cool") {
            document.getElementById("prediction_image").innerHTML = "&#129304;";
            document.getElementById("prediction").innerHTML = "Cool";
            speak("Cool");
        } else if (results[0].label = "Amazing") {
            document.getElementById("prediction_image").innerHTML = "&#128076;";
            document.getElementById("prediction").innerHTML = "Amazing";
            speak("Amazing");
        } else if (results[0].label = "Victory") {
            document.getElementById("prediction_image").innerHTML = "&#9996;";
            document.getElementById("prediction").innerHTML = "Victory";
            speak("Victory");
        }
    }
}