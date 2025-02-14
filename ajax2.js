$(document).ready(function(){
    let users = JSON.parse(localStorage.getItem('users'))|| [];
    let userList =$("#userList")  ;
  
    if(users.length===0)
    {
    alert("no user found");
    }
    else
    {
      users.forEach(user => {
          userList.append(`<li> name :${user.name } Email: ${user.email}</li>`);
          
      });
    }
  
  
  
  })