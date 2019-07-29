function Display(num)
{
    var result = "*$"; 
  if(num==0){
      console.log("not display");
  }

  else if(num>0){
      for(var i=1;i<num;i++){
         result = result+"*$";
      }
      console.log(result);
  }
}

Display(3);