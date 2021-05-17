function evenOdd(){
    let num=document.getElementById("number").value;
    if(num%2==0){
        alert("this number is even number" +num);
    }else{
        alert("this number is odd" +num);
    }
}

function nameLength(){
    let len1=document.getElementById("long").value;
    if(len1.length>20){
        alert("name cn not be greater tahn 20");
    }else if(len1.length<3){
        alert("name can not be less than 3");
    }else{
        alert("your name is" +len1+"your name length is"+len1.length);
    }
    
}

function changeColor(){
    let parag=document.getElementsByTagName("p")[0];
    parag.style.color="red";
}

