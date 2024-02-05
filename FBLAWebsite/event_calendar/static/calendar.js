const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  weeksContainer = document.querySelector(".dates_of_weeks"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  gotoBtn = document.querySelector(".goto-btn"),
  eventDay = document.querySelector(".event-day"),
  addEventDate = document.querySelector(".add-event-date"),
  eventsContainer = document.querySelector(".events"),
  addEventSubmit = document.querySelector(".add-event-btn"),
  weekBtn = document.querySelector("#week-button"),
  monthBtn = document.querySelector("#month-button");

const monthView = document.getElementById("month_view"),
  weekView = document.getElementById("week_view");

const sundayEvents = document.getElementById("sunday_events"),
  mondayEvents = document.getElementById("monday_events"),
  tuesdayEvents = document.getElementById("tuesday_events"),
  wednesdayEvents = document.getElementById("wednesday_events"),
  thursdayEvents = document.getElementById("thursday_events"),
  fridayEvents = document.getElementById("friday_events"),
  saturdayEvents = document.getElementById("saturday_events");


let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

var weekDates = [];
var daysOfWeek = [saturdayEvents, fridayEvents, thursdayEvents, wednesdayEvents, tuesdayEvents, mondayEvents, sundayEvents];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


let eventsArr = [];

// getEvents();

//function to add days

function initCalendar() {
  //to get previous month's days and current month all and rem next month days
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;
  

  //update data
  date.innerHTML = months[month] + " " + year;

    //adding days on dom

    let days = "";

    //prev month days
    for (let x = day; x > 0; x--) {
      days += `<div class = "day prev-date">${prevDays - x + 1}</div>`;
    }

    //current month days
    for (let i = 1; i <= lastDate; i++) {
      //check if event present on current day

      let event = false;
      eventsArr.forEach((eventObject) => {
        if (
          eventObject.day == i &&
          eventObject.month == month + 1 &&
          eventObject.year == year
        ) {
          event = true;
        }
      });

      if (
        i == new Date().getDate() &&
        year == new Date().getFullYear() &&
        month == new Date().getMonth()
      ) {
        activeDay = i;
        getActiveDay(i);
        updateEvents(i);
        //if event found also add event class
        if (event) {
          days += `<div class = "day today active event">${i}</div>`;
        } else {
          days += `<div class = "day today active">${i}</div>`;
        }
      } else {
        if (event) {
          days += `<div class = "day event">${i}</div>`;
        } else {
          days += `<div class = "day">${i}</div>`;
        }
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class = "day next-date">${j}</div>`;
    }
    daysContainer.innerHTML = days;
    addListener();
}

function getWeekDates(){
  const date = new Date()
  var weekNumberConversion = date.getDay();
  var currentWeekDay;

  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();

  var counter = 0;

  switch(weekNumberConversion) {
    case 0:
      currentWeekDay = "Sunday";
      for (let i = date.getDate() + 6; i >= date.getDate(); i--){
        if (i < 1){
          for (let j = 0; j < 7 - counter; j--){
            weekDates.push(prevDays - j);
          }
          break;
        }
        weekDates.push(i);
        counter ++;
      }
      break;
    case 1:
      currentWeekDay = "Monday";
      for (let i = date.getDate() + 5; i >= date.getDate() -1; i--){
        if (i < 1){
          for (let j = 0; j < 7 - counter; j++){
            weekDates.push(prevDays - j);
          }
          break;
        }
        weekDates.push(i);
        counter ++;
      }
      break;
    case 2:
      for (let i = date.getDate() + 4; i >= date.getDate() - 2; i--){
        if (i < 1){
          for (let j = 0; j < 7 - counter; j++){
            weekDates.push(prevDays - j);
          }
          break;
        }
        weekDates.push(i);
        counter ++;
      }
      currentWeekDay = "Tuesday";
      break;
    case 3:
      currentWeekDay = "Wednesday";
      for (let i = date.getDate() + 3; i >= date.getDate() - 3; i--){
        if (i < 1){
          for (let j = 0; j < 7 - counter; j++){
            weekDates.push(prevDays - j);
          }
          break;
        }
        weekDates.push(i);
      }
    case 4:
      currentWeekDay = "Thursday";
      for (let i = date.getDate() + 2; i >= date.getDate() - 4; i--){
        if (i < 1){
          for (let j = 0; j < 7 - counter; j++){
            weekDates.push(prevDays - j);
          }
          break;
        }
        weekDates.push(i);
        counter ++;
      }
    case 5:
      currentWeekDay = "Friday";
      for (let i = date.getDate() + 1; i >= date.getDate() - 5; i--){
        if (i < 1){
          for (let j = 0; j < 7 - counter; j++){
            weekDates.push(prevDays - j);
          }
          break;
        }
        weekDates.push(i);
        counter ++;
      }
    case 6:
      currentWeekDay = "Saturday";
      for (let i = date.getDate(); i >= date.getDate() - 6; i--){
        if (i < 1){
          for (let j = 0; j < 7 - counter; j++){
            weekDates.push(prevDays - j);
          }
          break;
        }
        weekDates.push(i);
        counter ++;
      }
    }

    console.log(weekDates);

    counter = 0;
}

function initWeekCalender(){

  getWeekDates();

  
  var datesOfWeeks = "";

  for (let i = 0; i < weekDates.length; i++){
    datesOfWeeks += `<div class = "week_date">${weekDates[i]} </div>`;
  }

  weeksContainer.innerHTML = datesOfWeeks;

  for (let i = 0; i < weekDates.length; i++){
    for (let j = 0; j < eventsArr; j++){
      if (eventsArr[j].getDate() == weekDates[i]){
        daysOfWeek[i].innerHTML += `<h1>hello</h1>`;
      }
    }
  }
}


initCalendar();
initWeekCalender();

function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

// dateInput.addEventListener("input", (e) => {
//   //allows only numbers
//   dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
//   if (dateInput.value.length == 2) {
//     dateInput.value += "/";
//   }
//   if (dateInput.value.length > 7) {
//     dateInput.value = dateInput.value.slice(0, 7);
//   }
//   if (e.inputType == "deleteContentBackward") {
//     if (dateInput.value.length == 3) {
//       dateInput.value = dateInput.value.slice(0, 2);
//     }
//   }
// });

// gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
  const dateArr = dateInput.value.split("/");
  if (dateArr.length == 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length == 4) {
      month = dateArr[0] - 1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }

  alert("invalid date");
}

const addEventBtn = document.querySelector(".add-event"),
  addEventContainer = document.querySelector(".add-event-wrapper"),
  addEventTitle = document.querySelector(".event-name"),
  addEventFrom = document.querySelector(".event-time-from"),
  addEventTo = document.querySelector(".event-time-to"),
  addEventCloseBtn = document.querySelector(".close");

addEventBtn.addEventListener("click", () => {
  addEventContainer.classList.toggle("active");
});

addEventCloseBtn.addEventListener("click", () => {
  addEventContainer.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target != addEventBtn && !addEventContainer.contains(e.target)) {
    addEventContainer.classList.remove("active");
  }
});

addEventTitle.addEventListener("input", (e) => {
  addEventTitle.value = addEventTitle.value.slice(0, 50);
});

addEventFrom.addEventListener("input", (e) => {
  addEventFrom.value = addEventFrom.value.replace(/[^0-9/:]/g, "");
  if (addEventFrom.value.length == 2) {
    addEventFrom.value += ":";
  }
  if (addEventFrom.value.length > 5) {
    addEventFrom.value = addEventFrom.value.slice(0, 5);
  }
});

addEventTo.addEventListener("input", (e) => {
  addEventTo.value = addEventTo.value.replace(/[^0-9/:]/g, "");
  if (addEventTo.value.length == 2) {
    addEventTo.value += ":";
  }
  if (addEventTo.value.length > 5) {
    addEventTo.value = addEventTo.value.slice(0, 5);
  }
});

function addListener() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      activeDay = Number(e.target.innerHTML);

      getActiveDay(e.target.innerHTML);
      updateEvents(Number(e.target.innerHTML));

      days.forEach((day) => {
        day.classList.remove("active");
      });

      //if prev month day clicked goto prev month and add active

      if (e.target.classList.contains("prev-date")) {
        prevMonth();
        setTimeout(() => {
          //select all days of that month
          const days = document.querySelectorAll(".day");

          //after going to prev month add add acftive
          days.forEach((day) => {
            if (
              !day.classList.contains("prev-date") &&
              day.innerHTML == e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
        //same thing but with next month
      } else if (e.target.classList.contains("next-date")) {
        nextMonth();
        setTimeout(() => {
          //select all days of that month
          const days = document.querySelectorAll(".day");

          //after going to prev month add add acftive
          days.forEach((day) => {
            if (
              !day.classList.contains("next-date") &&
              day.innerHTML == e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else {
        //remaining current month days
        e.target.classList.add("active");
      }
    });
  });
}

function getActiveDay(date) {
  const day = new Date(year, month, date);
  const dayName = day.toString().split(" ")[0];
  // eventDate.innerHTML = date + " " + months[month] + " " + year;
}

function updateEvents(date) {
  let events = "";
  eventsArr.forEach((event) => {
    // if (date == event.day && month + 1 == event.month && year == event.year) {
      event.events.forEach((event) => {
        events += `
                <div class = "event">
                    <div class = "title">
                        <i class = "fas fa-circle"></i>
                        <h3 class = "event-title">${event.title}</h3>
                    </div>
                    <div class = "event-date">
                        <span class = "event-date">${months[parseInt(event.date.split("-")[1]) - 1]} ${event.date.split("-")[2]}</span>
                    </div>
                    <div class = "event-time">
                        <span class = "event-time">${event.time}</span>
                    </div>
                </div>
                `;
      });
    // }
  });

  if ((events == "")) {
    events = `
        <div class = "no-event">
            <h3>No Events</h3>
        </div>
                `;
  }

  eventsContainer.innerHTML = events;


}

addEventSubmit.addEventListener("click", () => {
    const eventTitle = addEventTitle.value;
    const eventDate = addEventDate.value;
    const day = eventDate.split("-")[2];
    const eventTimeFrom = addEventFrom.value;
    const eventTimeTo = addEventTo.value;

    var localEvents = [];

    if (eventTitle == "" || eventTimeFrom == "" || eventTimeTo == "" || eventDate == ""){
        alert("Please fille all the fields");
        return;
    }

    const timeFromArr = eventTimeFrom.split(":");
    const timeToArr = eventTimeTo.split(":");

    if(
        timeFromArr.length !== 2 ||
        timeToArr.length !== 2 ||
        timeFromArr[0] > 23 ||
        timeFromArr[1] > 59 ||
        timeToArr[0] > 23 ||
        timeToArr[1] > 59
    ) {
        alert("Invalid Time Format");
    }

    const timeFrom = convertTime(eventTimeFrom);
    const timeTo = convertTime(eventTimeTo);

    const newEvent = {
      title: eventTitle,
      date: eventDate,
      time: timeFrom + " - " + timeTo,
    };

    let eventAdded = false;

    if (eventsArr.length > 0){
      eventsArr.forEach((item) => {
        if (
          item.day == activeDay &&
          item.month == month + 1 &&
          item.year == year
        ){
          item.events.push(newEvent);
          eventAdded = true;
        }
      });
    }

    if (!eventAdded) {
      eventsArr.push({
        day: activeDay,
        month: month + 1,
        year: year,
        events: [newEvent]
      });
    }

    addEventContainer.classList.remove("active");

    addEventTitle.value = "";
    addEventFrom.value = "";
    addEventTo.value = "";

    updateEvents(activeDay);

    const activeDayElement = document.querySelector(".day.active");
    if(!activeDayElement.classList.contains("event")) {
      activeDayElement.classList.add("event");
    }

    for (let i = 0; i < weekDates.length; i++){
      if (weekDates[i] == day){
        daysOfWeek[i].innerHTML += `<div class = "week_event" id = "event-${eventTitle}">
                  <div class = "title">
                      <h3 class = "event-title">${eventTitle}</h3>
                  </div>
                  <div class = "event-time">
                      <span class = "event-time">${timeFrom + " " + timeTo}</span>
                    </div> 
                </div>
                <div class = "spacer"> </div> `
      }
    }



});

function convertTime(time){
  let timeArr = time.split(":");
  let timeHour = timeArr[0];
  let timeMin = timeArr[1];
  let timeFormat = timeHour >= 12 ? "PM" : "AM";
  timeHour = timeHour % 12 ||  12;
  time = timeHour + ":" + timeMin + " " + timeFormat;
  return time;
}

eventsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("event")){
    const eventTitle = e.target.children[0].children[1].innerHTML;

    let removingEvent = document.getElementById("event-" + eventTitle);
    removingEvent.remove();

    eventsArr.forEach((event) => {
      if (
        event.day == activeDay &&
        event.month == month + 1 &&
        event.year == year
      ) {
        event.events.forEach((item, index) => {
          if (item.title == eventTitle) {
            event.events.splice(index, 1);
          }
        });

        if(event.events.length == 0){
          eventsArr.splice(eventsArr.indexOf(event), 1);

          const activeDayElement = document.querySelector(".day.active");
          if(activeDayElement.classList.contains("event")) {
            activeDayElement.classList.remove("event");
          }
        }
      }
    })
  }

  updateEvents(activeDay);
});

//listeners for all the view changing buttons

weekBtn.addEventListener("click",() => {
  monthView.style.display = "none";
  weekView.style.display = "block";
  dayView.style.display = "none";
})

monthBtn.addEventListener("click",() => {
  monthView.style.display = "block";
  weekView.style.display = "none";
  dayView.style.display = "none";
  initCalendar();
})



// function saveEvents() {
//   localStorage.setItem("events", JSON.stringify(eventsArr)); 
// }

// function getEvents() {
//   if(localStorage.getItem("events" == null)){
//     return;
//   }
//   eventsArr.push(...JSON.parse(localStorage.getItem("events")));
// }


