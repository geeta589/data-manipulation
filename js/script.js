// ========== Math Problems  =============
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

console.log(dontDoThis) ; 


// ==================== Pratical Math ====================

let gallon1 = 30;
let gallon2 = 28;
let gallon3 = 23;

let time1 = 55;
let time2 = 60;
let time3 = 75;

const totaltripdistance =1500;
const totalbudget = 175 ;
const costoffuel = 3;

const trip1 = totaltripdistance / gallon1;
console.log(trip1 , `Gallons of gas`)

const trip2 = totaltripdistance / gallon2;
console.log(trip2 , `Gallons of gas`)

const trip3 = totaltripdistance / gallon3;
console.log(trip3 , `Gallons of gas`)

const trip1fuelcost  = trip1 * costoffuel < totalbudget;
console.log(trip1fuelcost)

const trip2fuelcost  = trip2 * costoffuel < totalbudget;
console.log(trip2fuelcost)

const trip3fuelcost  = trip3 * costoffuel < totalbudget;
console.log(trip3fuelcost)

const trip1time = totaltripdistance /time1;
console.log(trip1time ,`Trip time takes in hours`)

const trip2time = totaltripdistance /time2;
console.log(trip2time , `Trip time takes in hours`)

const trip3time = totaltripdistance /time3;
console.log(trip3time ,`Trip time takes in hours`)


