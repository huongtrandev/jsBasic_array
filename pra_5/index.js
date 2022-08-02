let b = document.getElementById("caro");
let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
  board[i] = new Array(".", ".", ".", ".", ".");
}
for (let i = 0; i < 5; i++) {
  data += "<br/>";
  for (let j = 0; j < 5; j++) {
    data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
  }
}

// data +=
//   "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
b.innerHTML = data;

function changeX() {
  let positionX = prompt("X: ");
  let positionY = prompt("Y: ");
  data = "";
  board[positionX][positionY] = "X";
  for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
      data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  }

  //   data +=
  //     "<br/><br/><input type = 'button' value = 'Change Value' onclick = 'changeValue()'>";
  b.innerHTML = "<hr/>" + data;
}

function changeO() {
  let positionX = prompt("X: ");
  let positionY = prompt("Y: ");
  data = "";
  board[positionX][positionY] = "O";
  for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
      data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  }

  //   data +=
  //     "<br/><br/><input type = 'button' value = 'Change Value' onclick = 'changeValue()'>";
  b.innerHTML = "<hr/>" + data;
}
