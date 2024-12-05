const mayu = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const minu = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const sim = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
const boton = document.getElementById('btnContra')
const resultado = document.getElementById('divResultado')
const inputUsuario = document.getElementById('inputUsuario')

// --- Aleatoriedad -- //

function getAleat(arr) {
    return Math.floor(Math.random() * arr.length);
}

// --- Generador de contraseña -- //

const contraseña = (userValue) => {
  let contra = [];
  let alphaN = []

  alphaN.push(mayu, minu, num, sim)
  
  while (contra.length < userValue) {
    alphaN.forEach(element => {
  
      contra.push(element[getAleat(element)])
  
  });
  }
  while (contra.length != userValue) {
    contra.pop()
  }
  
  return contra.join('')
}

// --- Boton -- //

boton.addEventListener('click', () => {
  if (inputUsuario.value.trim() !== "") {
      resultado.innerHTML = `<p class="texto">Tu contraseña es:</p>
            <p id="pResultado">${contraseña(inputUsuario.value)}</p>`
  }
});
