let num_phone = document.querySelector('.num_inp');
let inpgrup = document.querySelectorAll('.all_inp');
let con_btn = document.querySelector('.con_btn')
let inp_div = document.querySelector('.inp_div')
let flag1 = false
let flag2 = false


inpgrup.forEach(item => {
  item.addEventListener('input', () => {
    if (item.value.length >= 2) {
      item.style.borderColor = 'green';
      item.nextElementSibling.innerText = 'Yazi duzgundur';
      item.nextElementSibling.style.color = 'green';
      item.style.boxShadow = '-2px 1px 15px -5px rgba(0, 255, 0, 0.75)';
      flag1 = true
    }
    else {
      item.style.borderColor = 'crimson';
      item.nextElementSibling.innerText = 'Bos qoymayin. Minimum 2, maximum 30 simvol ola biler.';
      item.nextElementSibling.style.color = 'crimson';
      item.style.boxShadow = '-2px 1px 15px -5px rgba(255, 0, 0, 0.75)'
    }
  });
});


 num_phone.addEventListener('input', () =>{
   if (num_phone.checkValidity() == true && num_phone.value !="") {
    num_phone.style.borderColor = 'green';
    num_phone.nextElementSibling.innerText = 'Nomre duzgundur';
    num_phone.nextElementSibling.style.color = 'green';
    num_phone.style.boxShadow = '-2px 1px 15px -5px rgba(0, 255, 0, 0.75)';
    flag2 = true
   }
   else {
     num_phone.style.borderColor = 'crimson';
     num_phone.nextElementSibling.innerText = ' Telefon düzgün yazilmayib,(000-000-0000) formata yazılmalıdır';
     num_phone.nextElementSibling.style.color = 'crimson';
     num_phone.style.boxShadow = '-2px 1px 15px -5px rgba(255, 0, 0, 0.75)'
   }
 })

 con_btn.addEventListener('click', () =>{
   if (flag1 == true && flag2 == true) {
     alert('Corect!')
     const user = {
       login:inp_div.children.item(1).value,
       phone:inp_div.children.item(4).value,
       nickname:inp_div.children.item(7).value,
       password:inp_div.children.item(10).value
     }
     console.log(user);
     localStorage.setItem('user', JSON.stringify(user));
     document.location.href = '../Registr_page/index.html';
   }
   else {
     alert('Try Again,you have mistake')
   }
 })
