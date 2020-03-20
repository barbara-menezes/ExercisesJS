const people = [
  { name: 'John', age: 30 },
  { name: 'Marie', age: 22 },
  { name: 'August', age: 30 }
]

function personalData(person){
  return `${person.name} is ${person.age} years old`;
};

function save(){
  people.forEach(person => {
    console.log(personalData(person))
  })
};

save();

 module.exports = { personalData, save };