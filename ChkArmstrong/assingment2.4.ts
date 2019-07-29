var ChkArmstrong = (x:number)=>{
    var orignalNumber:number = x;
    var remainder:number=0;
    var result:number=0;

    while(orignalNumber>0){
        remainder = orignalNumber%10;
        result = result+(remainder*remainder*remainder);
        orignalNumber = Math.floor(orignalNumber/10);
    }
    
    if(result==x){
        console.log("Number is Armstrong");
    }
    else{
        console.log("Number is Not Armstrong");
    }
}

ChkArmstrong(153);