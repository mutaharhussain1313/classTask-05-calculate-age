

  
  // Attach event listener to the "Calculate" button
  document.getElementById("cal").addEventListener("click", calculateAge);

  function calculateAge() {
    const inputDate = new Date(document.getElementById("date-input").value);
    const today = new Date();
  
    // Handle invalid input
    if (isNaN(inputDate)) {
      alert("Please enter a valid date.");
      return;
    }
  
    // Calculate age components
    let years = today.getFullYear() - inputDate.getFullYear();
    let months = today.getMonth() - inputDate.getMonth();
    let days = today.getDate() - inputDate.getDate();   
  
  
    // Adjust if necessary
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
  
    // Update the display
    document.getElementById('years').innerHTML = `${years} <span>Years</span>`;
    document.getElementById('months').innerHTML = `${months} <span>Months</span>`;
    document.getElementById('days').innerHTML = `${days} <span>Days</span>`;
  
  }