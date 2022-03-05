const { ml5 } = window;
const classifier = ml5.imageClassifier("MobileNet", console.log);

const result = document.querySelector(".result p");
const image = document.querySelector(".image");

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

async function classifyImage() {
    const results = await classifier.classify(image);
    console.log(results);
    const items = {
        apples: document.getElementById("bx--checkbox-p2-eating-apples"),
        bananas: document.getElementById("bx--checkbox-p2-eating-banana"),
        potatoChips: document.getElementById("bx--checkbox-p2-eating-potatochips"),
        cake: document.getElementById("bx--checkbox-p2-eating-cake"),
        riceAndBeans: document.getElementById("bx--checkbox-p2-eating-rice"),
        fruitYogurt: document.getElementById("bx--checkbox-p2-eating-yoghurt"),
        pizza: document.getElementById("bx--checkbox-p2-eating-pizza"),
        chickenStirFry: document.getElementById("bx--checkbox-p2-eating-chicken"),
        eggs: document.getElementById("bx--checkbox-p2-eating-egg"),
        apples_num: document.getElementById("number-input0"),
        bananas_num: document.getElementById("number-input1"),
        eggs_num: document.getElementById("number-input2"),
        chickenStirFry_num: document.getElementById("number-input3")
    };
    const label = results[0].label.split(',')[0];
    if (items[label]) {
        const nummed = items[results[0].label + '_num'];
        if (nummed) {
            nummed.value = ~~nummed.value + 1;
        } else {
            items[label].checked = true
        };
        result.innerText = toTitleCase(label) + " added!";
    } else {
        if (foodCarbonFootprints[label]) {
            console.log(label, foodCarbonFootprints[label]);
            result.innerText = toTitleCase(label) + " added!";
            totalcf += foodCarbonFootprints[label];
        } else {
            result.innerText = "Not found!";
        }
    }
}

function handleUpload(files) {
    image.src = URL.createObjectURL(files[0]);
    setTimeout(classifyImage, 50);
}