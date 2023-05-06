import process from 'process'
import { encrypt, decrypt } from './utils.js'

function start () {
  if (process.argv.length < 4) {
    console.log("Se debe ejecutar: node main.js <enc/dec> <text>")
  }
  const accion = process.argv[2]
  const text = process.argv[3]

  if (accion == 'enc') {
    const result = encrypt(text)
    console.log(result)
  }
  else if (accion == 'dec') {
    const result = decrypt(text)
    console.log(result) 
  }
}
start()