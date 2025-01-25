// Function to handle the event creation
document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get values from the form fields
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventLocation = document.getElementById('event-location').value;
  
    // Create a new event object
    const newEvent = {
      name: eventName,
      date: eventDate,
      time: eventTime,
      location: eventLocation
    };
  
    // Add the new event to the event list
    addEventToList(newEvent);
  
    // Reset the form fields
    document.getElementById('event-form').reset();
  });
  
  // Function to add an event to the listing
  function addEventToList(event) {
    const eventList = document.getElementById('event-list');
    const listItem = document.createElement('li');
    listItem.classList.add('event-item');
  
    listItem.innerHTML = `
      <h3>${event.name}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Time:</strong> ${event.time}</p>
      <p><strong>Location:</strong> ${event.location}</p>
    `;
  
    // Append the new event item to the list
    eventList.appendChild(listItem);
  }
 