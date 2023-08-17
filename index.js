let patientBiography = {
    name: "Alex",
    Surname: "Adams",
    age: 25,
    address: {
        country: "Uzbekistan",
        city: "Samarkand",
        street: "Mikrorayon",
        home: 52
    },
    tel: +998906551566,
    proffesion: "programmer",
    isMarried: true,
    familyMembers: {
        wife: {
            name: "Mariya",
            age: 23,
            tel: +998915655585,
        },
        son: {
            name: "John",
            age: 5
        },
        daughter: {
            name: "Linda",
            age: 1
        }
    },
    arrivalTime: "9pm",
} 

let anamnes = {
    analysis:{
        bloodType: "A",
        Rh: "+",
        hemophilic: false,
    },
    bloodPressure: "120/80",
    temperature: 36.6,
    headache: false,
    nausea: true,
    cough: false,
    dyspnea: "slightly",
    pain: "abdominal pain",
    diagnosis: "appendicitis"
    
}
// // 1 задание
let unite = Object.assign({}, patientBiography, anamnes)
console.log(unite)

// 2 задание
let keys = Object.keys(unite)
console.log(keys)

// // 3 задание
let value = Object.values(unite)
console.log(value)

// 4 задание
let combinate = keys.concat(value)
console.log(combinate)

// // 5 задание
let types = {
    number: [],
    string: [],
    boolean: [],
    object: []
}


combinate.filter( b=> {
    if(typeof(b) == "number") {
        types.number.push(b)
    } else if(typeof(b) == "string") {
        types.string.push(b)
    }else if(typeof(b) == "boolean") {
        types.boolean.push(b)
    } else if(typeof(b) == "object") {
        types.object.push(b)
    }
})

console.log(types);