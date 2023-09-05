const findTheOldest = function(people) {
  people.reduce(() => people.yearOfDeath - people.yearOfBirth)
};

// Do not edit below this line
module.exports = findTheOldest;
