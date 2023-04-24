
function dropWhite(str) {
  const res = str.split(' ').join('')
  return res
}

function dropWhiteLow(frase) {
  let respuesta = ''
  for (let i=0; i<frase.length; ++i) {
    if (frase[i] != ' ') {
      respuesta += frase[i]
    }
  }
  return respuesta
}

function reverse(frase) {
  let respuesta = ''
  for (let i = frase.length-1; i>=0; i--) {
    respuesta += frase[i]
  }
  return respuesta
}
// Ana, Arepera, Oso, Menem, Neuquen, Anita lava la tina
function isPalindrome (frase) {
  // 1. pasando a minusculas
  let str = frase.toLowerCase()
  // 2. Eliminamos espacios en blanco
  str = dropWhite(str)
  // 3. Lo damos vueta, y comparamos con el original
  const invertido = reverse(str)

  return str === invertido
}


// "[a + (b - (c**3)) * {a + 4}]" => true
// (La abeja [del latin "abejus"] (ver pag 29) suele alimentarse [comer [ingerir] de polen {u otras] cosas}) => false
function estaAnidado (frase) {
  const pila = []
  for (let letra of frase) {
    if (letra == '(' || letra == '{' || letra == '[') {
      pila.push(letra)
    }
    else if (letra == ')' || letra == '}' || letra == ']'){
      const ultimo = pila.pop()
      console.log('ultimo', ultimo)
      if ((letra == ')' && ultimo != '(') ||
          (letra == ']' && ultimo != '[' ) ||
          (letra == '}' && ultimo != '{')) {
        return false
      }
    }
  }
  return pila.length == 0
}

// "me compré un helado por 2500" => 2500
// "yo tengo 36 años, pero mi hermano tiene 31" => 3631
function obtenerNumero (frase) {
  ;
}

// 3645
function arabe2Roman (num) {
  let romano = ''

  const unidades = num % 10
  if (unidades > 0) {
    uni_romano =  ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII',
    'VIII', 'IX'][unidades]
    romano += uni_romano
  }

  const decenas = Math.floor((num % 100)/10)
  if (decenas > 0) {
    dec_romano =  ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX',
    'LXXX', 'XC'][decenas]
    romano = dec_romano + romano
  }
  
  const centenas = Math.floor((num % 1000)/100)
  if (centenas > 0) {
    cent_romano =  ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC',
    'DCCC', 'CM'][centenas]
    romano = cent_romano + romano
  }

  return romano
}

console.log(estaAnidado('(La abeja [del latin "abejus"] (ver pag 29) suele alimentarse [comer [ingerir] de polen {u otras] cosas})'))

