var inputfield = document.getElementById("inputfield");
var addbutton = document.getElementById("addbutton");
var taskcontainer = document.getElementById("taskcontainer");



addbutton.addEventListener("click", onclick);


 
function onclick()
{
    var paragraph = document.createElement("p");
    paragraph.innerText = inputfield.value;
    taskcontainer.appendChild(paragraph);
 
    inputfield.value = "";
   
    paragraph.addEventListener("dblclick",remove);
    function remove(){
    taskcontainer.removeChild(paragraph);
    }
   
    // var dbutton = document.createElement("button");
    // dbutton.innerHTML = "Delete";
    // // var body = document.getElementsByTagName("p")[0];
    // // body.appendChild(dbutton);
    // document.body.appendChild(dbutton);

    


    
};




 

 