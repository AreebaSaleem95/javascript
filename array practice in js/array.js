/*for a given array, with pieces of 5 items->[250,645,300,900,50]
all items have offer of 10% off on them.change the array
 to store final prices after applying after.
 hint: for(let val of items){
 offer= val /10;
 val = val - offer;}
*/
let items = [250, 645, 300, 900, 50];
let i = 0;
     for(let val of items) {
         let offer = val / 10;
         items[i] = val - offer;
         console.log(`value after offer=${items[i]}`);
         i++;
     }