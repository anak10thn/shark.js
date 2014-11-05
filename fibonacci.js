/*
	formula :
	f(n) = f(n-1) + f(n-2)
	if f(0) = 0 and f(1) = 1
*/
var f = [];
f[0] = 0;
f[1] = 1;
var n = 2;
var chk;
do {
  f[n] = f[n-1] + f[n-2];
  chk = f[n];
  console.log(n+"="+f[n]);
}
while (n++ && chk < parseInt(927372692193079200000));
console.log("indexke "+(n-1));
