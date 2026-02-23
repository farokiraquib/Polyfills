Array.prototype.pureit =function(cb){
   const resultArr = []
    for (let i = 0; i < this.length; i++) {
        
        if (cb(this[i],i,this)) {
       resultArr.push(this[i])
   }

    }
   
   return resultArr 
}

const scores = [32, 85, 41, 99, 50, 12];

const passingScores = scores.pureit((score) => score >= 50);
console.log(`Passing Scores:-${passingScores}`);

// Expexted output :-