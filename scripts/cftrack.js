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
    bus: 0.66, // per passenger
    cycle: 0,
    electricCar: 0,
    car: 0.2, // per kilometer
    plane: 0.285 // per kilometer per passenger
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

    const p2_eating_apples = document.getElementById("bx--checkbox-p2-eating-apples").checked;
    const p2_eating_bananas = document.getElementById("bx--checkbox-p2-eating-banana").checked;
    const p2_eating_potatoChips = document.getElementById("bx--checkbox-p2-eating-potatochips").checked;
    const p2_eating_cake = document.getElementById("bx--checkbox-p2-eating-cake").checked;
    const p2_eating_riceAndBeans = document.getElementById("bx--checkbox-p2-eating-rice").checked;
    const p2_eating_fruitYougurt = document.getElementById("bx--checkbox-p2-eating-yoghurt").checked;
    const p2_eating_cheesePizza = document.getElementById("bx--checkbox-p2-eating-pizza").checked;
    const p2_eating_chickenStirFry = document.getElementById("bx--checkbox-p2-eating-chicken").checked;
    const p2_eating_hardBoiledEgg = document.getElementById("bx--checkbox-p2-eating-egg").checked;

    const p2_transportation_motorcycle = document.getElementById("bx--checkbox-p2-travelling-motorcycle").checked;
    const p2_transportation_scooter = document.getElementById("bx--checkbox-p2-travelling-scooter").checked;
    const p2_transportation_bus = document.getElementById("bx--checkbox-p2-travelling-bus").checked;
    const p2_transportation_cycle = document.getElementById("bx--checkbox-p2-travelling-cycle").checked;
    const p2_transportation_electricCar = document.getElementById("bx--checkbox-p2-travelling-ecar").checked;
    const p2_transportation_car = document.getElementById("bx--checkbox-p2-travelling-car").checked;
    const p2_transportation_plane = document.getElementById("bx--checkbox-p2-travelling-plane").checked;

    // const p2_mobilephone_mobileToMobile = document.getElementById("bx--checkbox-p2-mobilephone-mobile-to-mobile").checked;
    // const p2_mobilephone_dataUsage = document.getElementById("bx--checkbox-p2-mobilephone-mobile-data-usage").checked;

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
        totalcf += transportation.car;
    }
    if (p2_transportation_plane) {
        totalcf += transportation.plane;
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
    document.getElementById("howitsgoing").innerHTML = totalcf < 2 ? "Your carbon footprint is low." : totalcf < 5 ? "Your carbon footprint is moderate." : "Your carbon footprint is high.";
}

const getScore = (cfInKg) => {
    return Math.round((cfInKg / 15) * 30);
}