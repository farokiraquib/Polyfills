 
 Array.prototype.sapat = function(depth = 1){
        const arrToHold = []

       for (let i = 0; i < this.length; i++) {
        
            if (Array.isArray(this[i]) && depth >0) {
               arrToHold.push(...this[i].sapat(depth-1))
            }else{
              arrToHold.push(this[i])
            }
       }
       return arrToHold
 }
 
 const arrr = [1,[3,44,[12]],[23]]

 console.log(arrr.sapat(2));
 