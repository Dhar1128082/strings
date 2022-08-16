
var Count_Vowels= (S) => 
{
   let countOne=0;
  for(let i of S)
  {
  if( i==='a' || i==='A' || i==='e' || i==='E' || i==='i' || i==='I' || i==='o' || i==='O' || i==='u' || i==='U')
    
    {
      countOne=countOne+1;
    }
  }
     return countOne;    
};
var Count_Consonants= (S) => 
{
  let countTwo=0;
  for(let j of S)
  {
  if( j==='a' || j==='A' || j==='e' || j==='E' || j==='i' || j==='I' || j==='o' || j==='O' || j==='u' || j==='U')
    {
      continue;   
    }
  else
    {
    countTwo=countTwo+1;
    }
  }
  return countTwo;     
};
 
