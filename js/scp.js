
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var input = document.getElementById('search-input').value.trim();
    if (input) {
      var formattedInput = input.toLowerCase().replace(/\s+/g, '-'); // Format input for URL
      var validPages = ['scp-002', 'scp-003', 'scp-004', 'scp-005', 'scp-006']; // List of valid SCP pages
      if (validPages.includes(formattedInput)) {
        window.location.href = formattedInput + '.html'; // Redirect to the corresponding page
      } else {
        alert('SCP not found. Please enter a valid SCP number.'); // Error message if SCP not found
      }
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    const socialLinks = document.querySelectorAll('.social-icons a');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function () {
            alert('You clicked on a social media link!');
        });
    });
});
