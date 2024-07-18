let em = document.querySelector("[name = email]");
let pas = document.querySelector("[name = pass]");
let nam = document.querySelector("[name = user]")

document.forms[0].onsubmit = function (e) {
  emailvalid = false;
  passvalid = false;
  

//   console.log(em.value);
//   console.log(em.value.length);

    if(em.value !="" && em.value.length <=15){
        emailvalid = true
    }
    if(pas.value !=""){
        passvalid=true
    }
   

  if (emailvalid === false || passvalid === false ) {
    e.preventDefault();
  }
};

