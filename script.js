// Data for classes, holidays, and schedule
const timetable = {
  monday: [
      { time: "9–10 AM", class: "CSPD", room: "1115" },
      { time: "10–11 AM", class: "MGD", room: "1216" },
      { time: "11–12 PM", class: "GENAI", room: "1215" },
      { time: "12–1 PM", class: "DBMS", room: "1115" },
      { time: "2–3 PM", class: "PAS", room: "1115" },
      { time: "3–4 PM", class: "DAALAB", room: "1106" },
      { time: "4–5 PM", class: "DAALAB", room: "1106" }
  ],
  tuesday: [
      { time: "9–10 AM", class: "CSPD", room: "1115" },
      { time: "10–11 AM", class: "CSPD", room: "1115" },
      { time: "11–12 PM", class: "DBMSLAB", room: "1210" },
      { time: "12–1 PM", class: "DBMSLAB", room: "1210" },
      { time: "2–3 PM", class: "GENAI", room: "1215" },
      { time: "3–4 PM", class: "DAA", room: "1215" }
  ],
  wednesday: [
      { time: "9–10 AM", class: "DAALAB", room: "1106" },
      { time: "10–11 AM", class: "DAALAB", room: "1106" },
      { time: "1–2 PM", class: "CSPD", room: "1115" },
      { time: "2–3 PM", class: "CSPD", room: "1115" }
  ],
  thursday: [
      { time: "9–10 AM", class: "PASLAB", room: "1106" },
      { time: "10–11 AM", class: "PASLAB", room: "1106" },
      { time: "11–12 PM", class: "DAALAB", room: "1106" },
      { time: "12–1 PM", class: "DAALAB", room: "1106" },
      { time: "3–4 PM", class: "DAA", room: "1215" },
      { time: "4–5 PM", class: "DBMS", room: "1207" }
  ],
  friday: [
      { time: "9–10 AM", class: "PAS", room: "1115" },
      { time: "10–11 AM", class: "DBMS", room: "1215" },
      { time: "11–12 PM", class: "DAA", room: "1215" },
      { time: "1–2 PM", class: "GENAI LAB", room: "1007" },
      { time: "2–3 PM", class: "GENAI LAB", room: "1007" },
      { time: "3–4 PM", class: "GENAI", room: "1215" },
      { time: "4–5 PM", class: "PAS", room: "1115" }
  ]
};

const holidays = [
  "Bhogi on 13-01", "Sankranti and Pongal on 14-01", "Holiday after SPARKRILL on 27-01",
  "Maha Shivaratri on 26-02", "Mid Term Exams from 03-03 to 07-03", "Holi on 14-03",
  "Eid Ul Fitr on 31-03", "Dr. B.R. Ambedkar’s Birthday on 14-04", "Good Friday on 18-04"
];

// Get current day and time
const currentDate = new Date();
const currentDay = currentDate.toLocaleString('en-us', { weekday: 'long' }).toLowerCase();
const currentTime = currentDate.getHours() * 60 + currentDate.getMinutes(); // Current time in minutes

// Function to get the current class
function getCurrentClass() {
  const daySchedule = timetable[currentDay];
  let currentClass = null;
  for (let i = 0; i < daySchedule.length; i++) {
      const classTime = daySchedule[i].time.split("–");
      const startTime = convertToMinutes(classTime[0]);
      const endTime = convertToMinutes(classTime[1]);
      
      if (currentTime >= startTime && currentTime <= endTime) {
          currentClass = daySchedule[i];
          break;
      }
  }
  return currentClass;
}

// Function to convert time (e.g. 9:00 AM) to minutes
function convertToMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

// Display the current class
function displayCurrentClass() {
  const currentClass = getCurrentClass();
  const classDetails = document.getElementById("class-details");
  if (currentClass) {
      classDetails.innerHTML = `You are in ${currentClass.class} (Room: ${currentClass.room})`;
  } else {
      classDetails.innerHTML = "No class currently.";
  }
}

// Display the upcoming classes
function displayUpcomingClasses() {
  const daySchedule = timetable[currentDay];
  const upcomingList = document.getElementById("upcoming-list");
  upcomingList.innerHTML = ""; // Clear the list
  
  for (let i = 0; i < daySchedule.length; i++) {
      const upcomingClass = daySchedule[i];
      const listItem = document.createElement("li");
      listItem.innerHTML = `${upcomingClass.time} - ${upcomingClass.class} (Room: ${upcomingClass.room})`;
      upcomingList.appendChild(listItem);
  }
}

// Display holidays
function displayHolidays() {
  const holidayList = document.getElementById("holiday-list");
  holidayList.innerHTML = ""; // Clear the list
  
  holidays.forEach(holiday => {
      const listItem = document.createElement("li");
      listItem.innerHTML = holiday;
      holidayList.appendChild(listItem);
  });
}

// Initialize the page content
window.onload = () => {
  displayCurrentClass();
  displayUpcomingClasses();
  displayHolidays();
};
