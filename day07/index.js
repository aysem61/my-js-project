

function evenOdd(){

let num=document.getElementById("number").value;

if(num%2===0){

    alert("this number is even number "+num);
} else{
alert("this number is odd "+num);

}


}




function len(){

let len1=document.getElementById("long").value;

alert(" your name length is:"+len1.length);


}

function nameLength(){

let len1=document.getElementById("long").value;

if(len1.length>20){

    alert("name can not be greater than 20");
}else if(len1.length<3){

    alert("name can not be less than 3");
} else{

    alert("your name is "+len1+" your name length is "+len1.length);
}

}





function changeColor(){
// document.getElementsByTagName returning array so add [] after (tagName)
let parag=document.getElementsByTagName("p")[0];    // ARR=[1,2,3] ARR[0]
parag.style.color="red";

}


function changeColor1(){
    // document.getElementsByTagName returning array so add [] after (tagName)
    let parag=document.getElementsByTagName("p")[1];
    parag.style.color="red";
    
    }
    function headTwo(){
        document.getElementsByClassName("head")[0].style.color="red";
        }
        function changeText(){
            document.getElementsByClassName("head")[0].innerHTML="after click button for innerHtml";
        }
        function useName(){
        document.getElementsByName("head3")[0].innerHTML="this is h3 after editing ineerhtml";
        }
        function querySelect(){
        document.querySelector("#query").innerHTML="after editin for query seleoctor after editing";
        }

        function li(){
            document.querySelector(".list2")
        }






