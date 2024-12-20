function incrementGoal(team) {
  const goalElement = document.getElementById(`team-${team}-goals`);
  let goals = parseInt(goalElement.textContent);
  goals++;

  if (goals === 8) {
      alert("Skor 8 oldu! Tebrikler, çok gol attınız(bjk:)");
  }

  goalElement.textContent = goals;
  goalElement.classList.add("pulse");
  setTimeout(() => goalElement.classList.remove("pulse"), 500);
}

function decrementGoal(team) {
  const goalElement = document.getElementById(`team-${team}-goals`);
  let goals = parseInt(goalElement.textContent);
  if (goals > 0) {
      goals--;
  }
  goalElement.textContent = goals;
}

function setGoal(team) {
  const newGoals = prompt("Yeni gol sayısını girin:");
  if (!isNaN(newGoals) && newGoals !== "" && newGoals >= 0) {
      document.getElementById(`team-${team}-goals`).textContent = parseInt(newGoals);

      if (parseInt(newGoals) === 8) {
          alert("Skor 8 oldu! Tebrikler, çok gol attınız!");
      }
  } else {
      alert("Lütfen geçerli bir numara girin.");
  }
}

function changeTeamName(team) {
  const newName = prompt("Yeni takım ismini girin:");
  if (newName.trim() !== "") {
      document.getElementById(`team-${team}-name`).textContent = newName;
  } else {
      alert("Geçersiz isim girdiniz.");
  }
}
