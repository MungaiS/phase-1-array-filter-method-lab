// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers , attribute ) {
  return drivers.filter((driver) => driver.toLowerCase() == attribute.toLowerCase())
  
}

function fuzzyMatch (drivers , letters){
  return drivers.filter((driver) => driver.toLowerCase().startsWith(letters.toLowerCase()))
}

function matchName (drivers , key){
  return drivers.filter((driver)=> driver.name == key)
   
}
