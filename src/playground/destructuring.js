const person={
    name:'judi',
    age:30,
    location:{
        city: 'nante',
        temp:32
    }
};

const {name : firstName='Anonymus', age}=person;
console.log(`${firstName}  is ${age}` );


const {city, temp:temperature}=person.location;
if(city && temperature){
    console.log(` its ${temperature}  in ${city}` );
}
////////////ARRAY

const address =['1299 s jupp', 'phihi', 'penny', '19414'];

const [, city2, state]=address;

console.log(`you are in ${city2} ${state}`);

const item =['coffe (hot)', '$2.00','$2.50','$2.75'];

