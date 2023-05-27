window.addEventListener('scroll' , 
function(){
let navbar = document.getElementById('menu-bar');
    if(window.pageYOffset >= 200){
  navbar.classList.add('sticky')
}
else{
  navbar.classList.remove('sticky');
}
});   
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.querySelector(".open-button").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.querySelector(".open-button").style.display = "block";
}
let email = document.getElementById("email");
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", ( ) => {
  if(window.pageYOffset > 500){
    toTop.classList.add("active");
  } else{
    toTop.classList.remove("active");
  }
});

$( document.body ).click(function() {
  $( "#showup" ).click(function() {
    $( ".containerrs" ).slideUp(200);
  });
  $( "#showdown" ).click(function() {
    $( ".containerrs" ).slideDown(200);
  });
 });

//  $("#showdown").click(function () {
//   $(this).toggleClass("down");
// })
  

//toggle menu/navbar script
$('.menu-btn').click(function(){
  $('#menu-bar .menu-inside').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});
  

$('#menu-bar .menu-inside a').click(function(event){
  event.preventDefault(); // prevent the default link behavior

  $('#menu-bar .menu-inside').removeClass("active"); // hide the menu
  $('.menu-btn i').removeClass("active"); // change the menu button back to hamburger icon

  // wait for 300 milliseconds before executing the default link behavior
  setTimeout(function() {
    window.location = event.currentTarget.href;
  }, 300);
});


//phone no validation
let PhoneNo = document.getElementById("phoneNo");
const validationPhone=()=>{
   if(PhoneNo > 10 && PhoneNo < 10){
    alert("Please enter valid Phone Number");
    return (false);
   }
   else{
    return(true);
   }
}




