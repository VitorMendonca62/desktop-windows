const d = new Date();

const elemHour = document.querySelector(".hour");
const elemDate = document.querySelector(".date");

function addDateAndHour() {
  let hour = d.getHours();
  let minute = d.getMinutes();

  const addZero = (elem) => (elem < 10 ? "0" + elem : elem);
  hour = addZero(hour);
  minute = addZero(minute);

  elemHour.innerHTML = `${hour}:${minute}`;

  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();

  date = addZero(date);
  month = addZero(month);
  year = addZero(year);

  elemDate.innerHTML = `${date}/${month}/${year}`;
}

addDateAndHour()
setInterval(addDateAndHour, 1000);
