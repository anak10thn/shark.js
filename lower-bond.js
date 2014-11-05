/* lower bound algorithm
   formula : http://www.evanmiller.org/images/rating-equation.png
*/
var p = 35
var n = 20

var lower_bond = ((p + 1.9208) / (p + n) - 1.96 * Math.sqrt((p * n) / (p + n) + 0.9604) / (p + n)) / (1 + 3.8416 / (p + n));

console.log(lower_bond);
