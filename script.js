//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych.

const boolean = false;
const number = 10;
const string = 'Hello World';

console.log('---Zadanie 1A ponizej---');
console.log(typeof(boolean));
console.log(typeof(number));
console.log(typeof(string));

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// 2 + "2"
// 2 + 2
// 2 * "2"
// 2 * 2
// 1 == true
// 0 == false
// 0 == null
// null == undefined

console.log('---Zadanie 1B ponizej---')
console.log(2 + '2');           // typ wyniku to 'string';
console.log(2 + 2);             // typ wyniku to number, wynikający z dodania do siebie dwóch wartości number.
console.log(2 * '2');           // typ wyniku to number, wynikający z iloczynu number * 'string'.
console.log(2 * 2);             // typ wyniku to number, wynikajacy z iloczynu number * number.
console.log(1 == true);         // typ wyniku to boolean, wynikający z tego ze 1 oznacza true (prąd płynie w jezyku 'komputera').
console.log(0 == false);        // typ wyniku to boolean, wynikający z tego ze 0 oznacza false (prąd nie płynie w języku 'komputera').
console.log(0 == null);         // typ wyniku to boolean, wynikający z tego ze wartosc null, nie jest równa 0.
console.log(null == undefined); // typ wyniku to boolean, wynikający z tego ze null, ma przypisaną wartość null.

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="

//Odpowiedź: 

// = - jest to operator przypisania.
// == - jest to operator porównania wartości z lewej i prawej strony nie biorąc pod uwagę typu.
// === - jest to operator porównania wartości z lewej i prawej strony biorąc pod uwagę typ obu z nich.

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli.

// Odpowiedź: Typy proste przechowują w pamięci komputera konkretną wartość, natomiast typu referencyjne przechowują adresy obiektów w pamięci.

let typProsty = 4;
let typReferencyjny = [1, 2, 3, 4];

console.log('---Zadanie 1C ponizej---')
console.log(`To jest typ prosty (np. number): ${typProsty}`);
console.log(`To jest typ referencyjny(np. tablica): ${typReferencyjny}`);

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości: 
// let val = 0 (przekonwertuj na typ Boolean)
// let num = "2137" (przekonwertuj na typ Number)
// let str = 007 (przekonwertuj na String)
// let und = undefined (przekonwertuj na Boolean)

let val = (0 == false);
let num = ('2137' * 1);
let str = (007 + '');
let und = (undefined === 0);

console.log('---Zadanie 1D ponizej---')
console.log(val);
console.log(num);
console.log(str);
console.log(und);

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli 

let arr = new Array();
arr.push(1, 2, 3);

console.log('---Zadanie 1E ponizej---');
console.log(arr);

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli

let person = new Object();
person.firstName = 'Frodo';
person.lastName = 'Baggins';
person.hobby = 'Smoking pipe herbs'

console.log('---Zadanie 1F ponizej---');
console.log(person);

//g)* opisz krótko czym dokładnie jest typ NaN

//Odpowiedź: NaN(Not a Number) - jest to wartość typu number, która nie reprezentuje zadnej liczby. Co ciekawe, NaN zawsze zwraca false, nawet jezeli porównamy ją do siebie. (Chyba ze uzyjemu funkcji isNaN())
//Wartość NaN jest najczęściej wyświetlana jako wynik nie poprawnego działania matematycznego (np. let a = 100 / car).

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko

//Odpowiedź:

//typ Symbol = jest to prymitywny typ danych, który zawiera unikalną wartość. Aby wywołać taką wartość uzyjemy Symbol(). 
//Najczęściej uzywany do debugowania, gdyz nie jest dodatkowo iterowany, oraz nie musimy sie martwic ze coś przypadkowo nadpiszemy.

//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb

const a = 10;
const b = 9;
const c = 14;

function sumOfThree(a, b, c){
    let sum = a + b + c;
    return sum;
};

const sum = sumOfThree(a, b, c);

console.log('---Zadanie 2A ponizej---');
console.log(`Sum of ${a}, ${b} and ${c} equals ${sum}`);

//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik

//Odpowiedź:

const base = 10;
const height = 10;

function traingleArea(base, height) {
    return (1 / 2) * base * height;
};

const triangle = traingleArea(base, height);

console.log('---Zadanie 2B ponizej---');
console.log(`Triangle area in this specific case is ${triangle}`);

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację

const age = 42;

function aboveEighteen(age) {
    let inputAgeTooLow = `Input age has to be higher than 18`;
    let ageCalc = age - 18;
    let inputAgeOk = `It's been ${ageCalc} years since you turned 18`;
    if (age > 18) {
        return inputAgeOk;
    } else {
        return inputAgeTooLow
    }
};

const ageCheck = aboveEighteen(age);

console.log('---Zadanie 2C ponizej---');
console.log(aboveEighteen(age))

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości
const arrayPersonInfo = [
    'Element1',
    'Element2',
    'Element3',
    'Element4'
];

function getElements(arrayPersonInfo) {
    let ele3 = arrayPersonInfo[2];
    let overall = arrayPersonInfo.length;
    let msgFinal = `Przekazana tablica ma ${overall} elementów a elementem numer 3 jest ${ele3}`;
    return msgFinal;
};

console.log('---Zadanie 2D ponizej---');
console.log(getElements(arrayPersonInfo));

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.

let testPerson = {
    name: "Jan",
    surname: "Kowalski",
    age: 20,
    height: 180
};

let testPerson2 = {
    name: 'Łukasz',
    surname: 'Starzyczny',
    age: 32,
    height: 178
};

function getInfoTestPerson(object) {
    let name = object.name;
    let surname = object.surname;
    let age = object.age;
    let height = object.height
    let finalMsg = `Pan/i ${name} ${surname} ma ${age} lat oraz ${height} cm wzrostu`;
    return finalMsg;
}

console.log('---Zadanie 2E ponizej---');
console.log(getInfoTestPerson(testPerson));
console.log(getInfoTestPerson(testPerson2));

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.

function changeAge(object, toChange) {
    object.age = toChange;
    return object;
};

console.log('---Zadanie 2F ponizej---');
console.log(changeAge(testPerson, 43));

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"

const g2 = 15;

function numberDivide(g2) {
    let checkIt = typeof(g2)
    let infog2;
    if (checkIt != 'number') {
        infog2 = `G2 parameters has to be a number!`;
    } else if (g2 % 3 == 0 && g2 % 5 ==0) {
        infog2 = 'Fizzbuzz';
    } else if (g2 % 3 == 0) {
        infog2 = 'Fizz';
    } else if (g2 % 5 == 0) {
        infog2 = 'Buzz';
    }
    return infog2;
};

console.log('---Zadanie 2G ponizej---');
console.log(numberDivide(g2));

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego

const h2 = 7;

const oddOrEven = h2 % 2 === 0 ? true : false;

console.log('---Zadanie 2H ponizej---')
console.log(oddOrEven);

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10

function getRandom(maxRandom) {
    return Math.floor(Math.random() * maxRandom);
};

console.log('---Zadanie 2I ponizej---')
console.log(getRandom(10));

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu

const j1 = 33;
const j2 = 55;

function getRandomBetween(j2Min, j2Max) {
    return Math.floor(Math.random() * (j2Max - j2Min) + j2Min);
};

console.log('---Zadanie 2J ponizej---');
console.log(getRandomBetween(j1, j2));

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.

console.log('---Zadanie 2K ponizej (3 funkcje)---');

const k2Min = 10.127;
const k2Max = 112.782;
const k2Final = 16;

function getDifference(k2Max, k2Min) {
    let difference = Math.abs(k2Max - k2Min);
    let result = difference - k2Final;
    return result;
};

const differenceFinal = getDifference(k2Max, k2Min)
console.log(`Róznica między ${k2Max} a ${k2Min}, odejmując wartość ${k2Final} wynosi ${differenceFinal}`)

const radius = 4;
const exponentValue = 2;

function getCircleArea(radius, exponenet) {
    return Math.PI * (radius, exponenet);
};

const circleArea = (Math.floor(getCircleArea(radius, exponentValue)));

console.log(`Pole koła wynosi w przyblizeniu ${circleArea}`)

const house = {
    x: 400,
    y: 223
};

const hospital = {
    x: 112,
    y: 100
};

function distanceStraightLine (house, hospital) {
    let distance = Math.hypot(house.x - hospital.x, house.y - hospital.y);
    return distance;
};

const heliDistance = Math.ceil(distanceStraightLine(house, hospital));
console.log(`Odległość którą musi przebyć helikopter z miejsca wypadku do szpitala wynosi ${heliDistance} km w linii prostej`);


//--------------------------
// 3. FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9

function countUp(item) {
    let goal = 'We have hit our goal, count 1 - 9. Abort.';
    for (i = 1; i < item; i++) {
        console.log(i);
    };
    return goal;
};

console.log('---Zadanie 3A ponizej---');
console.log(countUp(10));

//b) napisz pętlę która odliczy od 9 do 1

function countDown(item) {
    let goal = 'We have hit our goal, count from 9 - 1. Abort.';
    for (i = 9; i > item; i--) {
        console.log(i);
    };
    return goal;
};

console.log('---Zadanie 3B ponizej---');
console.log(countDown(0));

//c) napisz pętlę która odliczy od 5 do 15

function countFromFive(item) {
    let goal = 'We have hit our goal, count from 5 - 15. Abort.'
    for (i = 5; i < item + 1; i++) {
        console.log(i);
    };
    return goal;
};

console.log('---Zadanie 3C ponizej---');
console.log(countFromFive(15));

//d) napisz pętlę która odliczy od 0 do -10

function countFromZero(item) {
    let goal = 'We have hit our goal, count from 0 to -10. Abort.';
    for (i = 0; i >= item; i--) {
        console.log(i);
    };
    return goal;
};

console.log('---Zadanie 3D pozniej---');
console.log(countFromZero(-10));

//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2

function countByTwo(item) {
    let goal = 'We have hit our goal, count 1 - 20, by 2. Abort.';
    for (i = 0; i <= item; i += 2) {
        console.log(i);
    };
    return goal;
};

console.log('---Zadanie 3E pozniej---');
console.log(countByTwo(20));
//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4

function countByFour(item) {
    let goal = 'We have hit our goal, count 10 to -10, by 4. Abort.';
    for (i = 10; i >= item; i -= 4) {
        console.log(i);
    };
    return goal;
};

console.log('---Zadanie 3F ponizej---');
console.log(countByFour(-10));

//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...

function countIncreased(item) {
    let goal = 'We have hit our goal, count 1 - 100, double increase. Abort.';
    let increment = 2;
    for (i = 0 + 1; i < item; i *= increment) {
        console.log(i);
    };
    return goal;
};

console.log('---Zadanie 3G ponizej---');
console.log(countIncreased(100));

//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości

const num3H = 10;

function getOddNumbers(num3H) {
    let goal = 'We have hit our goar, odd numbers from 1 - 10 logged. Abort.';
    for (i = 0; i <= num3H; i++) {
        if (i % 2 != 0) {
            console.log(i);
        };
    };
    return goal;
};

console.log('---Zadanie 3H ponizej---');
console.log(getOddNumbers(num3H));

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego

const num3I = 10;

function getInfoOddOrEven(num3I) {
    let goal = 'We have hit our goal, all numbers 1 - 10 described. Abort.';
    for (i = 0; i <= num3I; i++) {
        if (i % 2 === 0) {
            console.log(`${i} jest liczbą parzystą`);
        } else {
            console.log(`${i} jest liczbą nieparzystą`);
        };
    };
    return goal;
};

console.log('---Zadanie 3I ponizej---');
console.log(getInfoOddOrEven(num3I));

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości

const num3J = 21;

function getFrom0toNumber(num3J) {
    let goal = 'We hit our goal, loop counted from 1 to variable taken. Abort.';
    for (i = 0; i <= num3J; i++) {
        console.log(i);
    };
    return goal;
};

console.log('---Zadanie 3J ponizej---');
console.log(getFrom0toNumber(num3J));

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)

const num3K = 50;
const numberToCountBy = 5;

function countItByNumber(num3K, numberToCountBy){
    let goal = 'We hit our goal, loop counted from 1 - 50 by variable. Abort.';
    for (i = 0; i <= num3K; i += numberToCountBy){
        console.log(i);
    };
    return goal;
};

console.log('---Zadnie 3K ponizej---');
console.log(countItByNumber(num3K, numberToCountBy));

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób

const arrNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"];

function welcomeEveryone(arrNames){
    let goal = 'We hit our goal, everyone was greeted';
    for (key of arrNames) {
        let greetings = `Hello ${key}`;
        console.log(greetings);
    };
    return goal;
};

console.log('---Zadanie 3L ponizej---');
console.log(welcomeEveryone(arrNames));

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.

const arrObjects = [{
    brand: "Mustang",
    color: "niebieski"
}, {
    brand: "Tesla",
    color: "czarna"
}, {
    brand: "Polonez",
    color: "żółty"
}, {
    brand: "Toyota",
    color: "fioletowa"
}];

function getColorAndBrand(arrObjects) {
    let goal = 'We hit our goal, all cars logged';
    for (key of arrObjects) {
        let info = `Przed Tobą stoi ${key.color} ${key.brand}`;
        console.log(info);
    };
    return goal;
};

console.log('---Zadanie 3Ł ponizej---');
console.log(getColorAndBrand(arrObjects));


//m) napisz funkcję która przyjmie tablicę arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(arrNumbers) {
    let goal = 'We hit our goal, odd numbers from array logged';
    for (key of arrNumbers){
        if (key % 2 === 0) {
            console.log(key);
        };
    };
    return goal;
};

console.log('---Zadanie 3M ponizej---');
console.log(getEvenNumbers(arrNumbers));

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami

const arrTypes = [2,4,5,undefined, null, "val", NaN, 7, 10, 333, "874", 22, 21, 400, "400", "undefined" ];

const arrOther = [];
const arrNubers = [];
const arrEven = [];

function pushMachine(arrTypes) {
    for (key of arrTypes) {
        if (key % 2) {
            arrEven.push(key);
        } else if (typeof(key) !== 'number') {
            arrOther.push(key);
        } else if (typeof(key) === 'number') {
            arrNubers.push(key);
        };
    };
    let obj = [];
    obj.push(arrEven, arrNubers, arrOther);
    let objFinal = {obj};
    return objFinal;
};

console.log('---Zadnie 3N ponizej---');
console.log(pushMachine(arrTypes));

//--------------------------
// 4. METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names

const names = ["Seba", "Kari", "Mati", "Andżi"];

const mapA1 = names.map(item => 'Hello ' + item);

console.log('---Zadanie 4A ponizej---');
console.log(mapA1);

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayOfEven = array10.filter(item => item % 2 === 0);

console.log('---Zadanie 4B ponizej---');
console.log(arrayOfEven);

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami

const people = [{
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
}, {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
}, {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
}, {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
}];

const onlyFemale = people.filter(function(people) {
    return people.gender == 'female';
});

console.log('---Zadanie 4C ponizej---');
console.log(onlyFemale);

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.

const shopping = "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";

function allInOne(item) {
    let lowered = item.toLowerCase(); {
        let splitted = lowered.split(' '); {
            let final = splitted.sort();
            return final;
        };
    };
};

console.log('---Zadanie 4D ponizej---');
console.log(allInOne(shopping));

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function reverseStuff (item) {
    let firstStep = item.toString(); {
        let secondStep = firstStep.split(",");
        secondStep.reverse(); {
            let finalStep = secondStep.join("");
            return finalStep; 
        };
    };
};

console.log(reverseStuff(alphabet));