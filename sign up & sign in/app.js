let arr = [];


function signup(){
    let name = document.getElementById("names").value
    localStorage.setItem("names" , name)

    let email = document.getElementById("emails").value
    localStorage.setItem("emails" , email)

    let password = document.getElementById("passwords").value
    localStorage.setItem("passwords" , password)

    let male = document.getElementById("males").value
    localStorage.setItem("males" , male)

    let female = document.getElementById("females").value
    localStorage.setItem("females" , female)
    if(male === true){
      arr.push("Name :"+name, "Email :"+email,"Password :"+password,"Male :"+male)
    }
    else{
      arr.push("Name :"+name, "Email :"+email,"Password :"+password,"Female :"+female)
    }
    console.log(arr)

}
//////////////////////////////////////log in/////////////////
function login(){
  let email =localStorage.getItem("emails");
  let passwords =localStorage.getItem("passwords");


  let username = document.getElementById("emails").value;
  let password = document.getElementById("passwords").value;
  if((email=== username)&&(password===passwords)){
      window.open("main.html")
  }
  else if((email !== username)&& (password !== passwords)){
      alert("please creat account")
  }
  else{
      alert("Invalid email pasword")
  }
}
////////////////////////////////////main////////////////////////
function total(){ 
  var first= document.getElementById("first").value
  var secned= document.getElementById("secned").value
  var third= document.getElementById("third").value
  var forth= document.getElementById("forth").value
  var fifth= document.getElementById("fifth").value
  var sixth= document.getElementById("sixth").value
  var totall = +first + + secned + + third + + forth + + fifth + + sixth
  var totelMarkes = 600
  var percentage= totall/600*100 + '%'
  document.getElementById("marks").innerHTML=totall
  document.getElementById("totelMarkes").innerHTML=totelMarkes
  document.getElementById("percentage").innerHTML=percentage
  if (totall = 80<=100){
      // document.getElementById("grade").innerHTML='grade A'
  }
  else if(totall = 60<=79){
      // document.getElementById("grade").innerHTML='grade B'
  }
  else if(totall = 40<=59){
      // document.getElementById("grade").innerHTML='grade C'
  }
  else{
      // document.getElementById("grade").innerHTML='fail'
  }
}
// document.getElementById("names").innerHTML= 'name'

































    // var student =[];

// var email =document.getElementById("emails").value
// var password =document.getElementById("passwords").value

//     console.log( email + password );
//     alert(  email + "," + password );
//     student.push[email , password];
// }

// function signup(){
//     let name = document.getElementById("names").value
//     let email = document.getElementById("emails").value
//     let password = document.getElementById("passwords").value
//     console.log( name , email + password );
//     alert(  name + "," + email + "," + password );
//     student.push[name , email , password];

//     if (name === names.value && (email === emails.value && (password === passwords.value))){
//         alert("ok")
//         }
//         else{
//             alert("incorect")
//         }
//     }

//     function myFunction() {
//         var x = document.getElementById("passwords");
//         if (x.type === "password") {
//           x.type = "text";
//         } else {
//           x.type = "password";
//         }
//       }
    
        
