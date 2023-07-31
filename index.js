let x = Math.floor((Math.random() * 100) + 1);
let count=0
console.log('Guess the number  which is in between 1 to 100')
console.log('\n')
for(let i=0;i<99;i++)
  {
    let y=prompt("Guess the number")
    if(x==y)
    {count++
      break;
    }
    
    if(x<y)
    {
      console.log('Hint:  number is less than %d',y)
      count++
    }
    else if(x>y)
    {
       console.log('Hint: number is greater than %d',y)
      count++
    }
  }
console.log('congo u guessed the number🙌🙌')
console.log('the number is %d',x)
console.log('player score is %d',100-count)

