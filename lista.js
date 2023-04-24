// ADT => Tipo de datos abstractos []
/*
Lista : {
  largo(),
  tipo(),
  agregar(cosa),
  quitar(posicion),
  ordenar(),
  imprimir()
}
*/

class Nodo {
  constructor(valor, sgte) {
    this.valor = valor
    this.sgte = sgte
  }
}

class Lista {
  constructor() {
    this.primero = null
  }

  agregar (cosa) {
    if (this.primero == null) {
      this.primero = new Nodo(cosa, null)
    }
    else {
      const antiguoPrimero = this.primero
      this.primero = new Nodo(cosa, antiguoPrimero)
    }
  }

  agregarFinal (valor) {
    if (this.primero == null) {
      this.primero = new Nodo(valor, null)
    }

    let nodo = this.primero
    while (true) {
      if (nodo.sgte == null) {
        break
      }
      nodo = nodo.sgte
    }
    // en este punto, nodo apunta al último nodode nuestra lista
    nodo.sgte = new Nodo(valor, null)
  }

  largo () {
    if (this.primero == null) {
      return 0
    }
    let nodo = this.primero
    let num_nodos = 1
    while (true) {
      nodo = nodo.sgte
      if (nodo == null) {
        break
      }
      num_nodos++
    }
    return num_nodos
  }

  imprimir () {
    if (this.largo() == 0) {
      return
    }
    // caso en que sabemos que tenemos al menos 1 elemento en nuestra lista
    let nodo = this.primero
    while (true) {
      console.log(nodo.valor)
      if (nodo.sgte == null) {
        break
      }
      nodo = nodo.sgte
    }
  }

  contiene (valor_buscado) {
    if (this.primero == null) {
      return false
    }
    let nodo = this.primero
    while (true) {
      if (nodo.valor == valor_buscado) {
        return true
      }
      if (nodo.sgte == null) {
        break
      }
      nodo = nodo.sgte
    }
    return false
  }

  min () {
    ;
  }

  max () {
    ;
  }

  avg () {
    ;
  }

  penultimo () {
    ;
  }

  copiar () {
    ;
  }

  filtrar (func) {
    ;
  }
}

const miLista = new Lista()
miLista.agregar('chao')
miLista.agregar(43)
miLista.agregar(true)
miLista.agregar('Bonjour')

miLista.agregarFinal('Esto debe ir al final')

console.log('Largo de la lista: ', miLista.largo())

console.log('Imprimiendo lista:')
miLista.imprimir()

console.log('¿La lista contiene el string "Bonjour":', miLista.contiene('Bonjour'))
console.log('¿La lista contiene el string "piña":', miLista.contiene('piña'))
