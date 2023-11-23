  // Function to display an alert on Enter key press
  function showAlertOnEnter(event) {
    if (event.key === 'm') {
      alert('Be Patient');
    }
  }
  
  document.addEventListener('keypress', function(event) {
    showAlertOnEnter(event); // Call the function to show alert on Enter key press
  });
