const form = document.querySelector('.input');
const time = document.querySelector('.header-time');
const btn = document.querySelector('.btn');
let value;
let month;
let arrMonth = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
let newMonth;
let newDay;
let NewYear;


form.addEventListener('change',(e)=>{
  e.preventDefault();
  value = document.querySelector('.input').value;
  let updateValue = new Date(value);

   month = updateValue.getMonth();

   newMonth = arrMonth[month];

  let day = new Date(value);

  newDay = day.getDate();


  let year = new Date(value);

  NewYear = year.getFullYear();

})


function showDate(){

   time.innerHTML=`Ваша дата ${newDay} ${newMonth} ${NewYear}`;
}

btn.addEventListener('click',showDate)