const { ml5 } = window;
const classifier = ml5.imageClassifier("MobileNet", console.log);

const result = document.querySelector(".result p");
const image = document.querySelector(".image");

async function classifyImage() {
    const results = await classifier.classify(image);
    result.innerText = "The item is " + results[0].label;
}

function handleUpload(files) {
    image.src = URL.createObjectURL(files[0]);
    setTimeout(classifyImage, 50);
}