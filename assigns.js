const fullName = prompt('Full Name')
const code = prompt('Passcode')

const profile = fullName + code
if( code.length > 6 || code.length < 4){
    console.log(`Passcode is invalid. you are not permitted to join the flight`)
}

else if( code.length <= 6 || code.length >= 4){
    console.log(`Passcode is valid. You are now permitted to join the flight`)

}


