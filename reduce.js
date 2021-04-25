const nums =[24,15,36,44,1];
const map = nums.map(num=>num*10); // Output:  map [ 240, 150, 360, 440 ]
const filter = nums.filter(num=>num>25);  // Output:   [ 36, 44 ]
const find = nums.find(num=>num>25);  // output : 36

const reduce = nums.reduce((current,num)=>current + num,0);
console.log(reduce)