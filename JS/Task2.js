function showProps(obj, objKeyName) {
  return (objKeyName in obj);
}
  const student = {
    name: 'Ivan',
    surename: 'Ivanov',
    ownTown: 'Moscow'
  };

console.log(showProps(student, "same"));  // false
console.log(showProps(student, "name"));  // true
