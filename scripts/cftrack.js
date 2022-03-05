var ate = false;
var travelled = false;
var usedcomputer = false;
var usednrelectricity = false;
var usedmobilephone = false;

var totalcf = 0;

try {
    JSON.parse(localStorage.getItem('tracker') || '');
} catch {
    localStorage.setItem('tracker', '{}');
}

const consumables = {
    apples: 0.032,
    bananas: 0.068,
    potatoChips: 4.82,
    cake: 0.155,
    riceAndBeans: 0.129,
    fruitYogurt: 0.340,
    pizza: 3.336,
    chickenStirFry: 0.608,
    eggs: 4.8,
}

const mobilePhones = {
    mobileToMobile: 0.0001,
    dataUsage: 0.3
}

const transportation = {
    motorcycle: 0.05,
    scooter: 0.027,
    bus: 0.66, // per passenger
    cycle: 0,
    electricCar: 0,
    car: 0.15, // per kilometer
    plane: 0.285 // per kilometer per passenger
}

var foodCarbonFootprints = {
    beef: 27.5,
    pork: 12.1,
    lamb: 39.2,
    pizza: 3.336,
    riceAndBeans: 0.129,
    nuts: 2.3,
    milk: 1.1,
    fruit: 1.2,
    coffee: 6.12,
    tea: 4.8,
    chocolate: 14.31,
    apples: 0.032,
    bananas: 0.068,
    potatoChips: 4.82,
    cake: 0.155,
    riceAndBeans: 0.129,
    fruitYogurt: 0.340,
    pizza: 3.336,
    chickenStirFry: 0.608,
    eggs: 4.8,
    lemon: 0.09
};

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
    } else {
        calcFootprint();
    }
}

const next2travelling = () => {
    travelled = false;
    document.getElementById("p2-travelling").style.display = "none";
    calcFootprint();
}

const calcFootprint = () => {
    document.getElementById("cfcalcdiv").style.display = "block";
    const foodVals = {
        apples: document.getElementById("bx--checkbox-p2-eating-apples").checked,
        bananas: document.getElementById("bx--checkbox-p2-eating-banana").checked,
        potatoChips: document.getElementById("bx--checkbox-p2-eating-potatochips").checked,
        cake: document.getElementById("bx--checkbox-p2-eating-cake").checked,
        riceAndBeans: document.getElementById("bx--checkbox-p2-eating-rice").checked,
        fruitYogurt: document.getElementById("bx--checkbox-p2-eating-yoghurt").checked,
        pizza: document.getElementById("bx--checkbox-p2-eating-pizza").checked,
        chickenStirFry: document.getElementById("bx--checkbox-p2-eating-chicken").checked,
        eggs: document.getElementById("bx--checkbox-p2-eating-egg").checked,
        apples_num: document.getElementById("number-input0").value,
        bananas_num: document.getElementById("number-input1").value,
        eggs_num: document.getElementById("number-input2").value,
        chickenStirFry_num: document.getElementById("number-input3").value
    };

    const p2_travelling_car_dist = document.getElementById("number-input4").value;
    const p2_travelling_plane_dist = document.getElementById("number-input5").value;
    const p2_travelling_plane_ppl = document.getElementById("number-input6").value;

    const p2_transportation_motorcycle = document.getElementById("bx--checkbox-p2-travelling-motorcycle").checked;
    const p2_transportation_scooter = document.getElementById("bx--checkbox-p2-travelling-scooter").checked;
    const p2_transportation_bus = document.getElementById("bx--checkbox-p2-travelling-bus").checked;
    const p2_transportation_cycle = document.getElementById("bx--checkbox-p2-travelling-cycle").checked;
    const p2_transportation_electricCar = document.getElementById("bx--checkbox-p2-travelling-ecar").checked;
    const p2_transportation_car = document.getElementById("bx--checkbox-p2-travelling-car").checked;
    const p2_transportation_plane = document.getElementById("bx--checkbox-p2-travelling-plane").checked;

    // const p2_mobilephone_mobileToMobile = document.getElementById("bx--checkbox-p2-mobilephone-mobile-to-mobile").checked;
    // const p2_mobilephone_dataUsage = document.getElementById("bx--checkbox-p2-mobilephone-mobile-data-usage").checked;

    if (foodVals.apples) totalcf += consumables.apples * foodVals.apples_num;
    if (foodVals.bananas) totalcf += consumables.bananas * foodVals.bananas_num;
    if (foodVals.potatoChips) totalcf += consumables.potatoChips;
    if (foodVals.cake) totalcf += consumables.cake;
    if (foodVals.riceAndBeans) totalcf += consumables.riceAndBeans;
    if (foodVals.fruitYogurt) totalcf += consumables.fruitYogurt;
    if (foodVals.pizza) totalcf += consumables.pizza;
    if (foodVals.chickenStirFry) totalcf += consumables.chickenStirFry;
    if (foodVals.eggs) totalcf += consumables.hardBoiledEgg;

    if (p2_transportation_motorcycle) {
        totalcf += transportation.motorcycle;
    }
    if (p2_transportation_scooter) {
        totalcf += transportation.scooter;
    }
    if (p2_transportation_bus) {
        totalcf += transportation.bus;
    }
    if (p2_transportation_cycle) {
        totalcf += transportation.cycle;
    }
    if (p2_transportation_electricCar) {
        totalcf += transportation.electricCar;
    }
    if (p2_transportation_car) {
        totalcf += transportation.car * p2_travelling_car_dist;
    }
    if (p2_transportation_plane) {
        totalcf += transportation.plane * p2_travelling_plane_dist * p2_travelling_plane_ppl;
    }

    // if (p2_mobilephone_mobileToMobile) {
    //     totalcf += mobilePhones.mobileToMobile;
    // }
    // if (p2_mobilephone_dataUsage) {
    //     totalcf += mobilePhones.dataUsage;
    // }

    console.log(totalcf);
    totalcf = Math.round(totalcf * 1000) / 1000;
    document.getElementById("cfvalue").innerHTML = totalcf + "kg";
    document.getElementById("howitsgoing").innerHTML = totalcf < 2 ? "Your carbon footprint is low. AMAZING job!" : totalcf < 5 ? "Your carbon footprint is not that high. Great going!" : "Your carbon footprint is very high. Try switching to an electronic car.";

    const date = Date.now();
    const days = ~~(date / (24 * 60 * 60 * 1000));
    const tracker = JSON.parse(localStorage.getItem('tracker'));
    const flag = tracker.hasOwnProperty(days);
    tracker[days] = totalcf;
    localStorage.setItem('tracker', JSON.stringify(tracker));
    if (flag) return;
    const streak = localStorage.getItem('streak');
    localStorage.setItem('streak', tracker.hasOwnProperty(days - 1) ? ~~streak + 1 : 1);
}

const getScore = (cfInKg) => {
    return Math.round((cfInKg / 15) * 30) > 30 ? 30 : Math.round((cfInKg / 15) * 30);
}