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
     

//  document.getElementByI