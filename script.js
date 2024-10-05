 document.getElementById("cal").addEventListener("click", calculateAge);

  function calculateAge() {
    const inputDate = new Date(document.getElementById("date-input").value);
    const currentDate = new Date();

    if (isNaN(inputDate)) {
      alert("Plz Eneter your correct date");
      return;
    }
  }