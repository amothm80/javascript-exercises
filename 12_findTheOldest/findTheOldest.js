const findTheOldest = function(people) {
    const peopleAges = people.map(person=>{
        if(!person[`yearOfDeath`]){
            person['age'] = new Date().getFullYear() - person.yearOfBirth;
        }else{
            person['age'] = person.yearOfDeath - person.yearOfBirth;
        }
        return person
    })
    peopleAgesSorted = peopleAges.sort((firstPerson, secondPerson)=>firstPerson.age > secondPerson.age ? -1:1);
    return peopleAgesSorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
