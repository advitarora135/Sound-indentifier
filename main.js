function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
});

function startClassification(){
    navigator.mediaDevices.getDisplayMedia({ audio:true });
    classifer.ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2fH7Th9it/', modelReady);
}

function modelReady() {
    classifier.classifying(gotresults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);


        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        img = document.getElementById('alien1');
        if (results[0].label == "Bark") {
            img.src = 'Dog.png';
        } else if (results[0].label == "Meow") {
            img.src = 'Cat.png';
        }
}
}
}