function openJob(title, location, description) {
  document.getElementById("job-title").innerText = title;
  document.getElementById("job-location").innerText = "Location: " + location;
  document.getElementById("job-description").innerText = description;
  document.getElementById("job-modal").style.display = "block";
}

function closeJob() {
  document.getElementById("job-modal").style.display = "none";
}

function openApply() {
  document.getElementById("apply-modal").style.display = "block";
}

function closeApply() {
  document.getElementById("apply-modal").style.display = "none";
}

function submitForm(event) {
  event.preventDefault();
  alert("Application submitted successfully!");
  closeApply();
  closeJob();
}
