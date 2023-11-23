  
// Function to toggle background color on mouseover
function toggleBackgroundColor(id) {
  const element = document.getElementById(id);
  if (element) {
    element.classList.toggle('highlight-background'); // Toggle CSS class
  }
}
  // Add mouseover event listeners to each unique element
  document.getElementById('onlineOrderBox1').addEventListener('mouseover', function(event) {
    toggleBackgroundColor('onlineOrderBox1');
  });
  
  document.getElementById('promosBox').addEventListener('mouseover', function(event) {
    toggleBackgroundColor('promosBox');
  });
  
  document.getElementById('smartphonesBox').addEventListener('mouseover', function(event) {
    toggleBackgroundColor('smartphonesBox');
  });
  
  document.getElementById('freeShippingBox').addEventListener('mouseover', function(event) {
    toggleBackgroundColor('freeShippingBox');
  });
  
  document.getElementById('supportBox').addEventListener('mouseover', function(event) {
    toggleBackgroundColor('supportBox');
  });
  
  document.getElementById('faqsBox').addEventListener('mouseover', function(event) {
    toggleBackgroundColor('faqsBox');
  });
  