var ate = false;
var travelled = false;
var usedcomputer = false;
var usednrelectricity = false;
var usedmobilephone = false;

var totalcf = 0;

const consumables = {
    apples: 0.032,
    bananas: 0.068,
    potatoChips: 0.075,
    cake: 0.155,
    riceAndBeans: 0.129,
    fruitYougurt: 0.340,
    cheesePizza: 3.336,
    chickenStirFry: 0.608,
    hardBoiledEgg: 0.333
}

const mobilePhones = {
    mobileToMobile: 0.0001,
    dataUsage: 0.3
}

const transportation = {
    motorcycle: 0.05,
    scooter: 0.027,
    bus: 0.66,
    cycle: 0,
    electricCar: 0
}

const next1 = () => {
    const p1Values = [];

    const p1eating = document.getElementById("bx--checkbox-p1-eating").checked;
    const p1travelling = document.getElementById("bx--checkbox-p1-travelling").checked;
    const p1usingcomputer = document.getElementById("bx--checkbox-p1-usingcomputer").checked;
    const p1electricity = document.getElementById("bx--checkbox-p1-electricity").checked;
    const p1usingmobilephone = document.getElementById("bx--checkbox-p1-usingmobilephone").checked;

    // p1Values.push(p1eating, p1travelling, p1usingcomputer, p1electricity, p1usingmobilephone);
    document.getElementById("p1").style.display = "none";

    if (p1eating) {
        ate = true;
        document.getElementById("p2-eating").style.display = "block";
    }
    if (p1travelling) {
        travelled = true;
        if (!p1eating) {
            document.getElementById("p2-travelling").style.display = "block";
        }
    }
};

const next2eating = () => {
    ate = false;
    document.getElementById("p2-eating").style.display = "none";
    if (travelled) {
        document.getElementById("p2-travelling").style.display = "block";
    }
}

const next2travelling = () => {
    travelled = false;
    document.getElementById("p2-travelling").style.display = "none";
    document.getElementById("cfcalcdiv").style.display = "block";
    calcFootprint();
}

const calcFootprint = () => {
    const p2_eating_apples = document.getElementById("bx--checkbox-p2-eating-apples").checked;
    const p2_eating_bananas = document.getElementById("bx--checkbox-p2-eating-banana").checked;
    const p2_eating_potatoChips = document.getElementById("bx--checkbox-p2-eating-potatochips").checked;
    const p2_eating_cake = document.getElementById("bx--checkbox-p2-eating-cake").checked;
    const p2_eating_riceAndBeans = document.getElementById("bx--checkbox-p2-eating-rice").checked;
    const p2_eating_fruitYougurt = document.getElementById("bx--checkbox-p2-eating-yoghurt").checked;
    const p2_eating_cheesePizza = document.getElementById("bx--checkbox-p2-eating-pizza").checked;
    const p2_eating_chickenStirFry = document.getElementById("bx--checkbox-p2-eating-chicken").checked;
    const p2_eating_hardBoiledEgg = document.getElementById("bx--checkbox-p2-eating-egg").checked;

    if (p2_eating_apples) {
        totalcf += consumables.apples;
    }
    if (p2_eating_bananas) {
        totalcf += consumables.bananas;
    }
    if (p2_eating_potatoChips) {
        totalcf += consumables.potatoChips;
    }
    if (p2_eating_cake) {
        totalcf += consumables.cake;
    }
    if (p2_eating_riceAndBeans) {
        totalcf += consumables.riceAndBeans;
    }
    if (p2_eating_fruitYougurt) {
        totalcf += consumables.fruitYougurt;
    }
    if (p2_eating_cheesePizza) {
        totalcf += consumables.cheesePizza;
    }
    if (p2_eating_chickenStirFry) {
        totalcf += consumables.chickenStirFry;
    }
    if (p2_eating_hardBoiledEgg) {
        totalcf += consumables.hardBoiledEgg;
    }

    console.log(totalcf);
    totalcf = Math.round(totalcf * 100) / 100;
    document.getElementById("cfvalue").innerHTML = totalcf + "kg";
    document.getElementById("howitsgoing").innerHTML = totalcf < 0.5 ? "Your carbon footprint is low." : totalcf < 1 ? "Your carbon footprint is moderate." : "Your carbon footprint is high.";
}