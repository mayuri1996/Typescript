function UpercaseToLowercase(arr){
    var newArray = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]==arr[i].toUpperCase()){
            arr[i]=arr[i].toLowerCase();
            newArray.push(arr[i]);
        }
        else{
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
}
var set = ["N","G","f","A","s"];
UpercaseToLowercase(set);