let initArray = [];
let carArray = ["sonata", "bmw", "tico", 1234123];
// java
// private String[] carArray = new String[5];
// private ArrayList<String> = new ArrayList<String>;

console.log(carArray);
console.log(carArray[0]);
console.log(carArray[1]);
console.log(carArray[2]);
console.log(carArray[3]);

// 익숙한 방식
for(let i = 0; i < carArray.length; i++) {
    let car = carArray[i];
    console.log(car);
};

// ES6
for(car of carArray) {
    console.log(car);
};

// array map
carArray.map((car) => {
    console.log(car);
});