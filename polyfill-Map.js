 
 Array.prototype.mānacitram = function(cb){
        const arrToHold = []

       for (let i = 0; i < this.length; i++) {
        
            arrToHold.push(cb(this[i],i,this))  
       }
       return arrToHold
 }
 