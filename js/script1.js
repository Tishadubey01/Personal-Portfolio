



var i=0;
var images=[];
images[0]= './../img/t1.jpeg';
images[1]='./../img/t23.jpeg';
images[2]= './../img/t3.jpeg';
images[3]='./../img/t4.jpeg';
images[4]= './../img/t5.jpeg';


function changeimage() {
    document.slideshow.src = images[i];
    if (i < images.length - 1) {
        i++;
    }
    else { i = 0; }

}
window.onload = changeimage;

var j = 0;
function displaycontact() {

    var arr = [];

    arr[0] = '<h1>EMAIL</h1><br/><p>tisha.dubey@students.iiit.ac.in</p>'
    arr[2] = '<h1>Contact Number</h1 ><br/><p>7999739763 </p>'
    arr[1] = '<h1>SOCIAL</h1><br/><div class= "icons"><div><a href= "https://www.facebook.com/tisha.dubey.54" target="_blank"><img src= "../img/facebook.svg"></a></div><div><a href= " https://instagram.com/tisha_dubey01?utm_medium=copy_link" target="_blank"><img src= "../img/instagram.svg"></a></div></div>'
    arr[3] = '<h1>Lets connect on Snapchat</h1><br/><p>A great way to get my attention is to engage with my Snaps</p><div class="icons"><div><div><a href= "https://www.snapchat.com/add/tisha_dubey01" target="_blank"><img src= "../img/snapchat.svg"></a></div>'
    if (j < 3)
        j++;
    else
        j = 0;
    document.getElementById("box").innerHTML = arr[j];
    setTimeout("displaycontact()", 5000);
}

function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = localStorage.clickcount + " likes"
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function screen() {
maketable();}
    function maketable() {
        var table='<table class="tt">';
        var r=Number(localStorage["Rows"]);
        
        if(localStorage.Rows){
            
            table+='</tr>';
            table += '<td>';
            table += "E-mail";
            table += '</td>';
            table += '<td>';
            table += "Name";
            table += '</td>';
            table += '<td>';
            table += "Skills";
            table += '</td>';
            table+='<td>';
            table+="Level of proficiency";
            table+='</td>'
        table+='</tr>';
        
        
        for(var i=1;i<=r;i++)
        {

            var s1 = "Email" + i;
            var s2 = "name" + i;
            var s3 = "skills" + i;
            var s4 = "level" + i;
        table+='<tr>';
        table+='<td>';
        table+=localStorage[s1];

            table+='</td>';
            table+='<td>';
            table+=localStorage[s2];
            table+='</td>';
            table+='<td>';
            table+=localStorage[s3];
            table+='</td>';
            table+='<td>';
            table+=localStorage[s4];
            table+='</td>';
            table+='</tr>';
        }
        table+='</table>';
        document.getElementById("Print").innerHTML=table;
        }

    }




function Form() {

    if(localStorage.Rows)
    {
        localStorage.Rows=Number(localStorage.Rows)+1;

    }
    else{
        localStorage.Rows=1;
    }
    var rows=localStorage.Rows;
    var x1 = document.getElementById("Email").value;
    if (x1 == "") {
        alert("E-mail must be filled");
        return false;
    }
    var x2 = document.getElementById("name").value;
    if (x2 == "") {
        alert("Name must be filled");
        return false;
    }
    var x3 = document.getElementById("skills").value;
    if (x3 == "") {
        alert("Skills must be filled");
        return false;
    }
    var x4 = document.getElementById("level").value;
    if(x4=="Select") {
        alert("Level must be filled");
        return false;
    }
   


    var s1 = "Email" + rows;
    var s2 = "name" + rows;
    var s3 = "skills" + rows;
    var s4 = "level" + rows;
    localStorage[s1] = x1;
    localStorage[s2] = x2;
    localStorage[s3]=x3;
    localStorage[s4]=x4;
maketable();

}

function changecolor() {
    document.getElementById("change").style.color = black;
}
function samecolor() {
    document.getElementById("change").style.color = babypink;
}
window.onscroll = function() {myFunction()}; //to execute scroll
var nav=document.getElementById("navig");
var sticky = nav.offsetTop;
function myFunction(){


    if(window.pageYOffset >=sticky){
        nav.classList.add("sticky")
    }
    else{
        nav.classList.remove("sticky");
    }
}

