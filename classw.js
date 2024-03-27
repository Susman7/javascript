const fullName = prompt('Full Name')
const gender = prompt('Gender')
const age = prompt('Age')

const profile = fullName + gender + age
if( gender === 'male'){
if (age < 18 || age > 40 ){
    console.log(`Get out you are below 18 or above 40 😡`)
}

else if(age > 18 || age < 40){
    console.log( `Welcome as a male 😊`  )
}
}

else if( gender === 'female'){
if (age < 17 || age > 39 ){
    console.log(`Get out you are below 18 or above 40 😡`)
}

else if(age > 17 || age < 39){
    console.log( `Welcome as a female 😊`  )
}
}


