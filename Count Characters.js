const countCharacters = (S) => 
{
    let B=[2];
    let countOne=0, countTwo=0;
    for(let i=0; i<S.length; i++)
    {
      if(S[i]==="A")
      {
        countOne+=1;
      }
      else if(S[i]==="D")
      {
        countTwo+=1
      }
    }
    B[0]=countOne;
    B[1]=countTwo;
    return B
};
 
