//se trae del html el botón
const options = document.querySelectorAll(".box");
//se cera para contar las posiciones o clicks que se den
let shift = 0;
//contiene las posiciones que seleccione el usuario
const board = [];

//hace la validacion de que carge todo el html antes de iniciar con las funciones
window.addEventListener("DOMContentLoaded", pressButton);

//Toma el boton precionado por el usuario
function pressButton() {  
  options.forEach((item, idx) =>
    item.addEventListener("click", (event) => pressedButton(event, idx))
  );
}

//Toma las posisiones y las utiliza para poder imprimir "O" o "X"
function pressedButton(event, pos) {
  // Se crea a "X" y a "O"
  let x = "X";
  let o = "O";
  // Se toma todo el valor del botón y se almacena
  let currentBtn = event.target;

  // Verificar si el cuadro ya tiene un valor asignado
  if (currentBtn.textContent === "") {
    // Esto es para determinar qué jugador sigue
    if (shift % 2 === 0) {
      // Número par para "X"
      currentBtn.style.backgroundColor = "#008000";
      currentBtn.textContent = x;
      board[pos] = x;
      shift++;
    } else {
      // Número impar para "O"
      currentBtn.style.backgroundColor = "#0d58e4";
      currentBtn.textContent = o;
      board[pos] = o;
      shift++;
    }

    // Validación del juego y recarga en caso de empate o ganador
    if (tieGame() !== true) {//validacion empate
      Swal.fire({
        title: 'Nadie ganó',
        width: 400,
        padding: '3rem',
        color: '#716add',
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });
    } else if (validateGame() !== false) {//validacion ganador 
      Swal.fire({
        title: 'You won: ' + event.target.textContent,
        width: 400,
        padding: '3rem',
        color: '#716add',
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });
    }
  }
}


//se generan las posibles convinaciones para que alguno de los jugadores gane dependiendo de la posicion de "X" o "O"
function validateGame() {
  if (board[0] === board[1] && board[0] === board[2] && board[0]) {
    return board[0];
  } else if (board[3] === board[4] && board[3] === board[5] && board[3]) {
    return board[3];
  } else if (board[6] === board[7] && board[6] === board[8] && board[6]) {
    return board[6];
  } else if (board[0] === board[3] && board[0] === board[6] && board[0]) {
    return board[0];
  } else if (board[1] === board[4] && board[1] === board[7] && board[1]) {
    return board[1];
  } else if (board[2] === board[5] && board[2] === board[8] && board[2]) {
    return board[2];
  } else if (board[0] === board[4] && board[0] === board[8] && board[0]) {
    return board[0];
  } else if (board[2] === board[4] && board[2] === board[6] && board[2]) {
    return board[2];
  } else return false  
}

//Se valida si algien no ganó nadie en caso de no ganara nadie se retorna false o en caso de ganar algien se retorna true
function tieGame() {
    let gano = validateGame();
    if ( shift == 9 && gano==false ) {
        return false;
    }
   return true;
}