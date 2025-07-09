const form = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

// Add Event
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('eventName').value;
  const date = document.getElementById('eventDate').value;
  const location = document.getElementById('eventLocation').value;

  if (name && date && location) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${name}</strong> - ${date} @ ${location}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Event handling: delete button
    li.querySelector('.delete-btn').addEventListener('click', function () {
      li.remove();
    });

    eventList.appendChild(li);

    // Reset form
    form.reset();
  }
});
