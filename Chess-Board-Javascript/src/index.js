(function () {
  console.log("hey");
  let board = "<table>";
  for (let i = 0; i < 8; i++) {
    board += "<tr>";
    for (let j = 0; j < 8; j++) {
      board += `<td class="chess-block ${
        (i + j) % 2 === 0 ? "odd" : "even"
      }" data-row="${i}" data-column="${j}"></td>`;
    }
    board += "</tr>";
  }
  board += "</table>";
  document.querySelector("#app").insertAdjacentHTML("beforeend", board);
  const table = document.getElementsByTagName("table")[0];
  table &&
    table.addEventListener("click", function (e) {
      if (e.target.nodeName === "TD") {
        clearBoard();
        const node = e.target;
        const row = +node.dataset.row;
        const column = +node.dataset.column;
        //console.log(row, column);
        let i = row;
        let j = column;
        console.log(i, j);
        while (i >= 0 && j >= 0) {
          // console.log(i);
          document
            .querySelector(`[data-row="${i}"][data-column="${j}"]`)
            .classList.add("selected");
          i--;
          j--;
        }
        i = row + 1;
        j = column + 1;
        console.log(i, j);
        while (i < 8 && j < 8) {
          //console.log(i);
          document
            .querySelector(`[data-row="${i}"][data-column="${j}"]`)
            .classList.add("selected");
          i++;
          j++;
        }
        i = row - 1;
        j = column + 1;
        console.log(i, j);
        while (i >= 0 && j < 8) {
          //console.log(i, j);
          document
            .querySelector(`[data-row="${i}"][data-column="${j}"]`)
            .classList.add("selected");
          i--;
          j++;
        }
        i = row + 1;
        j = column - 1;
        console.log(i, j);
        while (i < 8 && j >= 0) {
          //console.log(i, j);
          document
            .querySelector(`[data-row="${i}"][data-column="${j}"]`)
            .classList.add("selected");
          i++;
          j--;
        }
      }
    });

  function clearBoard() {
    document.querySelectorAll("table td").forEach((col) => {
      col.classList.remove("selected");
    });
  }
})();
