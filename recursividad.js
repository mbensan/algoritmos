/**
 * 5! = 1*2*3*4*5 == 5*4*3*2*1 == 5*4!== 5*4*3!
 * fact(N) = N * fact(N - 1)
 * fact(1) = 1
 * 25! = 25*24! == 25*24*23! == 25*24*23* .... *3*2*1!
 */

function fact_rec (num) {
  if (num == 1) {
    return 1
  }
  return num * fact_rec(num - 1)
}

function sum (num) {
  let base = 0
  for (let i=1; i<=num ; i++) {
    base += i
  }
  return base
}

function fact (num) {
  let base = 1
  for (let i=1; i<=num ; i++) {
    base *= i
  }
  return base
}

/**
 * Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
 * fib(n) = fib(n-1) + fib(n-2)
 * fib(1) = 1
 * fib(2) = 1
 */
function fibonacci (num) {
  if (num <= 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

/**
 * 3 => "tres"
 * 54 => "cincuenta y cuatro"
 * 100 => "cien"
 * 123 => "ciento veintitres"
 */
function num2string(num) {
  // 1. Los primeros (del 0 al 15)
  if (num <= 15) {
    const primeros16 = ['cero', 'uno', 'dos', 'tres', 'cuatro',
    'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once',
    'doce', 'trece', 'catorce', 'quince']
    return primeros16[num]
  }
  // 2. Los dieci-algo
  else if (num <= 19) {
    const unidades = num - 10
    return 'dieci' + num2string(unidades)
  }
  // 3. 20 => veinte , 21,22,24,27 => veinti-algo
  else if (num == 20) {
    return 'veinte'
  }
  // 4. veinti-algo 27
  else if (num <= 29) {
    const unidades = num - 20
    return 'veinti' + num2string(unidades)
  }
  // 5. 30 al 99 => decenas-y-unidades   78
  else if (num <= 99) {
    const decenas = Math.floor(num/10)
    const unidades = num - (decenas * 10)

    const palabras_decenas = ['', '', '', 'treinta', 'cuarenta',
    'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']
    if(unidades==0){
      return palabras_decenas[decenas]
    }
    return palabras_decenas[decenas] + ' y ' + num2string(unidades)
  }
  else if (num == 100) {
    return 'cien'
  }
  // centena- -resto  167
  else if (num <= 999) {
    const centenas = Math.floor(num / 100) // 5
    const resto = num - (centenas * 100)  // 76

    const palabras_centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos',
      'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']
    
    if (resto == 0) {
      return palabras_centenas[centenas]
    }
    return palabras_centenas[centenas] + ' ' + num2string(resto)
  }
  else if (num <= 999999) {
    const miles = Math.floor(num / 1000)
    const resto = num - (miles * 1000)

    return num2string(miles) + ' mil ' + num2string(resto)
  }
  else {
    return 'NO IMPLEMENTADO'
  }
}

// hanoi(2, 'A', 'C')
function hanoi (num_platos, inicio='A', fin='C') {
  const palos = 'ABC'
  const palo_medio = palos.replace(inicio, '').replace(fin, '')
  // caso base
  if (num_platos == 2) {
    console.log("1 -> " + palo_medio)
    console.log("2 -> " + fin)
    console.log("1 -> " + fin)
    return
  }
  // caso general
  let platos = num_platos
  hanoi(platos - 1, inicio, palo_medio)
  console.log(platos + ' -> ' + fin)
  hanoi(platos - 1, palo_medio, fin)
}

