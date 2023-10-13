let username;

const note1 = document.getElementById('note1');
const note2 = document.querySelector('#note2');
const note3 = document.getElementById('note3');
const btnCalculate = document.getElementById('calculate');
const result = document.getElementById('result');

btnCalculate.addEventListener('click', resul);

note1.addEventListener('blur', validation);
note2.addEventListener('blur', validation);
note3.addEventListener('blur', validation);

function calculateNote() {
  let data1 = parseFloat(note1.value);
  let data2 = parseFloat(note2.value);
  let data3 = parseFloat(note3.value);

  let final = ((data1 * 0.3) + (data2 * 0.3) + (data3 * 0.4)).toFixed(2);
  return final;
}


function validateEmptyInput(value) {
    // Eliminar espacios al inicio y al final
    const trimmedValue = value.trim();
  
    // Comprobar si el valor está vacío
    return trimmedValue !== '';
  }

  


  function validation() {
    // Obtener el valor del campo de entrada
    const value = this.value;
  
    // // Validar el valor del campo de entrada
    // if (!validateEmptyInput(value)) {
    //   // Mostrar un mensaje de error
    //   result.textContent = 'El campo de entrada no puede estar vacío';
    //   result.style.color = 'red';
  
    //   // Deshabilitar el botón `btnCalculate`
    //   btnCalculate.disabled = true;
      
  
    //   // Retornar
    //   return;
    // }
  
    // Validar el rango de la nota
    let number = parseFloat(value);
  
    if (number < 1 || number > 5) {
      result.textContent = 'La nota no puede ser menor a 1 ni mayor que 5';
      result.style.color = 'red';
      this.value='';
      btnCalculate.disabled = true;
    } else {
      result.textContent = 'La nota está dentro del rango.';
      result.style.color = 'black';
      btnCalculate.disabled = false;
    }
  }
  

function resul() {
  const final = calculateNote();

  if (final >= 3.5 && final < 5) {
    result.textContent = `Usted aprobó la materia con ${final}`;
    result.style.color = 'green';
  } else if (final >= 1 && final < 3.5) {
    result.textContent = `Usted reprobó la materia con ${final}`;
    result.style.color = 'red';
  } else {
    result.textContent = `Sr(a) ${username}, felicitaciones, nota perfecta: ${final}`;
    result.style.color = 'blue';
  }
}

// Obtener el nombre del usuario
username = prompt('Ingrese su nombre');
