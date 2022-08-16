var Palin_Check = (str) =>
{
	 let last, first;
	 first=0;
	 last=str.length-1
	 while(first<last)
	 {
	   if(str[first++] !== str[last--])
	   {
	     return "False"
	   }
	 }
	 return "True"
}