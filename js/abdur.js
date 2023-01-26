
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


function myGlobalFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("tore");
    var btnText = document.getElementById("myButton");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


 
          
  // natural organic Biological safe


        // natural function
  function naturalFunction() {
    var dots = document.getElementById("dott");
    var moreText = document.getElementById("readen");
    var btnText = document.getElementById("btnSubmit");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

      // organic function

  function organicFunction() {
    var dots = document.getElementById("koma");
    var moreText = document.getElementById("besi");
    var btnText = document.getElementById("btnS");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
          // biological safe
  function biologicalFunction() {
    var dots = document.getElementById("bunda");
    var moreText = document.getElementById("much");
    var btnText = document.getElementById("btnO");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


    // function foodFunction(){
    //   var dots=ducument.getElementById("dota");
    //   var moreText= document.getElementById("morea");
    //   var btnText = document.getElementById("btnSubmita");

    //   if(dots.style.display==="none"){
    //     dots.style.display="inline";
    //     btnText.innerHTML= "Read more";
    //     moreText.style.display = "none";
    //   }else{
    //     dots.style.display="none";
    //     btnText.innerHTML="Read less";
    //     moreText.style.display="inline";
    //   }
    // }

    function foodFunction() {
      var dots = document.getElementById("dota");
      var moreText = document.getElementById("morea");
      var btnText = document.getElementById("btnSubmita");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
    }


    // scroll up function on matrix function 

    // const scrollUpButton = document.getElementById("scrollUp");
    //   scrollUpButton.addEventListener("click", () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   });

      // window.onscroll = function() {
      //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      //     document.getElementById("scrollUp").style.display = "block";
      //   } else {
      //     document.getElementById("scrollUp").style.display = "none";
      //   }
      // };
      

      const readLessButton = document.getElementById("readLess");
      const content = document.getElementById("content");

      readLessButton.addEventListener("click", () => {
        content.classList.toggle("collapsed");
        if(content.classList.contains("collapsed"))
          readLessButton.innerText = "Read More";
        else
          readLessButton.innerText = "Read Less";
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

