// First Problem
// Seer To Mon converter

function seerToMon(seer){
    if(seer < 1 ||typeof seer == 'string' ||typeof seer == 'boolean'){
        return 'Incorrect input';
    }
    else{
    const mon = seer / 40;
    return mon;
}
}

const mySeerValue = seerToMon(120); //Enter your value
console.log(mySeerValue);

// Second problem
// Total Sales Calculator

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    //Conditions in case of negative values
    if(shirtQuantity, pantQuantity, shoeQuantity == 0 ){
        return 'No things added to cart';
    }
    else if(shirtQuantity, pantQuantity, shoeQuantity < 0 ||
        typeof shirtQuantity == 'string' && typeof pantQuantity == 'string'
        && typeof shoeQuantity == 'string'){
        return 'Incorrect input';
    }
    else{
    const shirtPrice = shirtQuantity * 100; 
    const pantPrice = pantQuantity * 200;
    const shoePrice = shoeQuantity * 500;
    const totalPrice = shirtPrice + pantPrice + shoePrice;
    return totalPrice;
}
}

const myItemQuantities = totalSales(3,2,5); //Enter your value
console.log(myItemQuantities);

// Third problem
// Delivery cost calculator

function deliveryCost(tshirtQuantity){
    
    //Default costs
    const costOfDeliveringFirst100 = 100;
    const costOfDeliveringSecond100 = 80;
    const restCost = 50;

    if (tshirtQuantity < 1 ||typeof tshirtQuantity == 'string'){
        return 'Incorrect input';
    }
    else if(tshirtQuantity <= 100){
        const costOfFirst100 = tshirtQuantity * costOfDeliveringFirst100;
        return costOfFirst100;
    }
    else if(tshirtQuantity <= 200){
        const initialCost = 100 * costOfDeliveringFirst100;
        const restTshirtsLeft = tshirtQuantity - 100;
        const costOfsecond100 = restTshirtsLeft * costOfDeliveringSecond100;
        const totalCostBelow200Shirts = initialCost + costOfsecond100;
        return totalCostBelow200Shirts;
    }
    else { 
        const initialCost = 100 * costOfDeliveringFirst100;
        const costOfsecond100 = 100 * costOfDeliveringSecond100;
        const restTshirtsLeftAfter200 = tshirtQuantity - 200;
        const restTshirtCost = restTshirtsLeftAfter200 * restCost;
        const totalCost = initialCost + costOfsecond100 + restTshirtCost;
        return totalCost;
    }
}

const myTshirts = deliveryCost(250); //Enter your value
console.log(myTshirts);


//Fourth problem
// 5 character friend name print out in array

function perfectFriend(friendNames){
    let container = '';
    if(typeof friendNames == 'number'){
        return 'Please enter string variable';
    }
    else if(friendNames.length == 0){
        return 'Please enter data';
    }
    else{
    for(let i = 0; i < friendNames.length; i++){
        const names = friendNames[i];
        if(names.length == 5){
            container = names;
            break;
        }
    }
}
    return container;
}

const myFriends = perfectFriend(['Adib','Jinat','Jhankar', 'Ahnaf']);
console.log(myFriends);