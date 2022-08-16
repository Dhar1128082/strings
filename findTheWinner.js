var Game_Winner = (S) => 
{
  let count1=0,count2=0
  for(let i of S)
  {
    if(i==="D")
    {
      count1=count1+1
    }
    else if(i==="A")
    {
      count2=count2+1
    }
  }
  if(count1===count2)
  {
    return "Draw"
  }
  else if(count1>count2)
  {
    return "Danish"
  }
  else
  {
    return "Aditya"
  }
}