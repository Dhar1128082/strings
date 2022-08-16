var Reverse_String = (str) => 
{
    let strReverse="";
    for(let i=str.length-1; i>-1; i--)
    {
      strReverse=strReverse+str[i]
    }
    return strReverse;
}; 
 
