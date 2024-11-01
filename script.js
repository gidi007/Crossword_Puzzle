document.addEventListener("DOMContentLoaded", () => {
  const btnReset = document.getElementById("btnReset");
  const btnCheck = document.getElementById("btnCheck");
  const crosswordContainer = document.getElementById("crossword");

  btnReset.addEventListener("click", resetGame);
  btnCheck.addEventListener("click", checkAnswers);

  function resetGame() {
      document.querySelectorAll(".char").forEach(input => input.value = "");
  }

  function checkAnswers() {
      document.querySelectorAll(".char").forEach(input => {
          if (input.dataset.letter && input.value.toUpperCase() !== input.dataset.letter) {
              input.value = ""; // Clear incorrect answers
          }
      });
  }

  function initializeGame() {
      createGrid();
      loadClues();
  }

  function createGrid() {
      const gridSize = 15; // Customize grid size here
      crosswordContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
      crosswordContainer.innerHTML = "";

      // Example answer key for populating grid cells with correct answers
      const answerKey = [
          // Each sub-array represents a row in the grid; empty strings represent blank cells
          ["I", "S", "A", "", "", "", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
          // Additional rows as needed for crossword layout
      ];

      for (let row = 0; row < gridSize; row++) {
          for (let col = 0; col < gridSize; col++) {
              const square = document.createElement("div");
              square.classList.add("square");

              const input = document.createElement("input");
              input.type = "text";
              input.maxLength = 1;
              input.classList.add("char");
              input.dataset.letter = answerKey[row]?.[col] || ""; // Set correct answer or leave blank

              square.appendChild(input);
              crosswordContainer.appendChild(square);
          }
      }
  }

  function loadClues() {
      const cluesAcross = document.getElementById("cluesAcross");
      const cluesDown = document.getElementById("cluesDown");

      const acrossClues = [
          { answer: "ISA", clue: "The bringer of the Gospel (3)" },
          { answer: "DAWUD", clue: "The bringer of the Psalms (5)" },
          // Add more across clues
      ];

      const downClues = [
          { answer: "NABI", clue: "A prophet (4)" },
          { answer: "RASUL", clue: "A messenger (5)" },
          // Add more down clues
      ];

      // Populate across clues
      acrossClues.forEach((item, index) => {
          const clueElem = document.createElement("div");
          clueElem.classList.add("clue");
          clueElem.innerHTML = `<strong>${index + 1}</strong>: ${item.clue}`;
          cluesAcross.appendChild(clueElem);
      });

      // Populate down clues
      downClues.forEach((item, index) => {
          const clueElem = document.createElement("div");
          clueElem.classList.add("clue");
          clueElem.innerHTML = `<strong>${index + 1}</strong>: ${item.clue}`;
          cluesDown.appendChild(clueElem);
      });
  }

  initializeGame();
});
