

function ChkString(arr){
    var set = arr;
    var subset = "Marvellous";
    if (set.search(subset) == -1 ) { 
        console.log("Does not contain Marvellous" ); 
     } else { 
        console.log("String Contains Marvellous in it" ); 
     } 
}

var set = ChkString("Pune Kothrude Marvellous Infosystem")