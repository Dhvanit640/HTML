// document
// document.all
// document.documentElement
// document.head
// document.title
// document.body
// document.images
// document.anchors
// document.links
// document.forms
// document.doctype
// document.URL
// document.baseURI
// document.domain
    // aa badha dom na prakar chhe and ane thi apane sarch kari sakiye targeting kari sakiye 

var d;
d = document.body;
console.log(d);

// get & set Methods

// get methods

// innerText koy pan class ya id no tex jani sakiye chhi 
// innerHTML koy pan html teg jani sakiye chhi 
// getAttribute  ama akhu avi jay chhe jem ke koy pan teg chhe te teg akho lakhay ne avi jay chhe
// getAttributeNode ama teni value pan alag thi value pan avi jay chhe
// Attributes ama akhe akho div show thay chhe teni andar badha teg show thay chhe div ya id bane 

var n;
 n = document.getElementsByClassName("main").innerText;
 console.log(n);

 var n;
 n = document.getElementsByClassName("d11").innerHTML;
 console.log(n);

 var nn;
 nn = document.getElementsByClassName("d12")[0].getAttribute("class");
 console.log(nn);

 var nn;
 nn = document.getElementsByClassName("d12")[0].getAttributeNode("class");
 console.log(nn);
  
 var nn;
 nn = document.getElementsByClassName("main2").attributes;
 console.log(nn);

//  set method
    // innerText
    // innerHTML
    // setAttribute new class janret kari sakiye chhiye css pan add kari sakiye 
    // removeAttribute aa koy pan class ni css hatavi nakhe chhe 
    
    var dhvanit;
    dhvanit=document.getElementsByClassName("d1111").innerText = "Dhvanit";
    console.log(dhvanit);
    document.getElementsByClassName("d1111").innerText = "Dhvanit";
    // document.getElementsByTagName("h1")[0].innerText="dada";

    document.getElementById("dhva").setAttribute("class","xyz");
    document.getElementById("dhva").setAttribute("style","border:10px dotted pink");
    // document.getElementById("dhva").Attribute[1].value = ("xyz");
    
    // removeAttribute 
       document.getElementById("dhva").removeAttribute("style");
       document.getElementById("dhva").removeAttribute("class");
     

    //    id        document.getElementById()
    //   class name document.getElementsByClassName()
    //  tag name    document.getElementsByTagName()

        // querySelector document.querySelector(CSS Selector) aa pela eliment ne j target kare chhe 
        // querySelectorAll document.querySelectorAll() aa badha eliment ne target kare chhe

        var d;
        d=document.querySelector("#dada");
        console.log(d);
        d=document.getElementById("dada");
        console.log(d);
        d=document.querySelectorAll(".d12")[0].innerHTML;
        console.log(d);


        // dom in three method
        // 1) style
        // 2) class name
        // 3) classList

        // style
        var dh;
        dh = document.querySelector("#dhva");
        console.log(dh);
        document.querySelector("#dhva").style.backgroundColor= "rgba(60, 20, 222, 0.27)".color="";
        document.querySelectorAll("h1")[0].style.color="blue";
        document.querySelectorAll("h1")[3].style.color="blue";


        // class name 
        // class name cheng kari sakiye chhi
         
        var d;
        // document.querySelector(".d1111").className = "dada";
        // document.getElementsByClassName("d1111").style.color = "pink";
        // d=document.querySelector(".d1111").className;
        console.log(d);

        // claslist
        var d;
        document.querySelector("#dhva").classList.add("abc" , "efg");
        d = document.querySelector("#dhva").classList;
        console.log(d);
//  document.getElementByI