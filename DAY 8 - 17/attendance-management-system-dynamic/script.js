let attendanceData = JSON.parse(localStorage.getItem("attendanceData")) || {};
let studentNames = JSON.parse(localStorage.getItem("studentNames")) || [];

const studentList = document.getElementById("studentList");
const addBtn = document.getElementById("addStudentBtn");
const searchInput = document.getElementById("searchInput");
const attendanceDate = document.getElementById("attendanceDate");

// Set today's date as default
attendanceDate.value = new Date().toISOString().split("T")[0];

function saveData() {
  localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
  localStorage.setItem("studentNames", JSON.stringify(studentNames));
}

function renderStudents() {
  const date = attendanceDate.value;
  const searchTerm = searchInput.value.toLowerCase();
  studentList.innerHTML = "";

  studentNames.forEach((name, index) => {
    if (!name.toLowerCase().includes(searchTerm)) return;

    const status = attendanceData[date]?.[name] || "Not Marked";

    const card = document.createElement("div");
    card.className = "student-card";

    const nameDiv = document.createElement("div");
    nameDiv.className = "student-name";
    nameDiv.textContent = name;

    const statusDiv = document.createElement("div");
    statusDiv.className = `status ${status.toLowerCase().replace(" ", "")}`;
    statusDiv.textContent = status;

    const btnGroup = document.createElement("div");
    btnGroup.className = "card-buttons";

    const presentBtn = document.createElement("button");
    presentBtn.textContent = "Present";
    presentBtn.className = "present-btn";
    presentBtn.onclick = () => markAttendance(name, "Present");

    const absentBtn = document.createElement("button");
    absentBtn.textContent = "Absent";
    absentBtn.className = "absent-btn";
    absentBtn.onclick = () => markAttendance(name, "Absent");

    btnGroup.appendChild(presentBtn);
    btnGroup.appendChild(absentBtn);

    card.appendChild(nameDiv);
    card.appendChild(statusDiv);
    card.appendChild(btnGroup);

    studentList.appendChild(card);
  });
}

function markAttendance(name, status) {
  const date = attendanceDate.value;
  if (!attendanceData[date]) attendanceData[date] = {};
  attendanceData[date][name] = status;
  saveData();
  renderStudents();
}

addBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("studentName");
  const name = nameInput.value.trim();
  if (name && !studentNames.includes(name)) {
    studentNames.push(name);
    nameInput.value = "";
    saveData();
    renderStudents();
  }
});

searchInput.addEventListener("input", renderStudents);
attendanceDate.addEventListener("change", renderStudents);

window.onload = renderStudents;
