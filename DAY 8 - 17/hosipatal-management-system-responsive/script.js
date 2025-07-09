
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  loadAppointments();
  loadFeedbacks();
  loadProfile();
});

// Login Page Logic
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === "admin" && pass === "admin123") {
      alert("Login successful as Admin!");
      window.location.href = "dashboard.html";
    } else if (user === "user" && pass === "user123") {
      localStorage.setItem("loggedInUser", user);
      alert("Login successful as User!");
      window.location.href = "user-dashboard.html";
    } else {
      alert("Invalid credentials!");
    }
  });
}

// Load Profile
function loadProfile() {
  const user = localStorage.getItem("loggedInUser");
  if (user && document.getElementById("profileName")) {
    document.getElementById("profileName").innerText = user;
    document.getElementById("profileEmail").innerText = user + "@example.com";
  }
}

// Appointment Form (User)
const appointmentForm = document.getElementById('appointmentForm');
const appointmentTable = document.getElementById('appointmentTableBody');
if (appointmentForm && appointmentTable) {
  appointmentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const patient = document.getElementById('apptPatient').value;
    const doctor = document.getElementById('apptDoctor').value;
    const datetime = document.getElementById('apptDateTime').value;
    const row = { patient, doctor, datetime };
    let stored = JSON.parse(localStorage.getItem('appointments')) || [];
    stored.push(row);
    localStorage.setItem('appointments', JSON.stringify(stored));
    displayAppointments();
    appointmentForm.reset();
  });
}

function loadAppointments() {
  if (appointmentTable) {
    displayAppointments();
  }
}

function displayAppointments() {
  const data = JSON.parse(localStorage.getItem('appointments')) || [];
  appointmentTable.innerHTML = data.map(a => `<tr><td>${a.patient}</td><td>${a.doctor}</td><td>${a.datetime}</td></tr>`).join("");
}

// Feedback Form (User)
const feedbackForm = document.getElementById('feedbackForm');
const feedbackTable = document.getElementById('feedbackTableBody');
if (feedbackForm && feedbackTable) {
  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const patient = document.getElementById('feedbackPatient').value;
    const feedback = document.getElementById('feedbackText').value;
    const row = { patient, feedback };
    let stored = JSON.parse(localStorage.getItem('feedbacks')) || [];
    stored.push(row);
    localStorage.setItem('feedbacks', JSON.stringify(stored));
    displayFeedbacks();
    feedbackForm.reset();
  });
}

function loadFeedbacks() {
  if (feedbackTable) {
    displayFeedbacks();
  }
}

function displayFeedbacks() {
  const data = JSON.parse(localStorage.getItem('feedbacks')) || [];
  feedbackTable.innerHTML = data.map(f => `<tr><td>${f.patient}</td><td>${f.feedback}</td></tr>`).join("");
}
