
// const originalScore = 150

// const firstExam = Number(prompt( 'First Exam Score'))
// const secondExam = Number(prompt( 'Second Exam Score'))
// const thirdExam = Number(prompt( 'Third Exam Score'))

// const userScore = firstExam + secondExam + thirdExam

// if (userScore <= 50){
//     alert (`useer score is: ${userScore} and u failed`)
// }

// if (userScore > 50 && userScore  <=100){
//     alert(`user scorre is: ${userScore} and u pass`)
// }

// else if( userScore > 100){
//     alert(`user score is: ${userScore} Excellent and u pass`)
// }



const num1 = Number(prompt('First Number'))
const sign = prompt('Sign')
const num2 = Number(prompt('Second Number'))

const answer = num1 + sign + num2

if (sign === '+' ){
    console.log( num1 + num2)
}

else if(sign === '-'){
    console.log( num1 - num2 )
}

else if(sign === '*'){
    console.log( num1 * num2)
}

else if( sign === '/'){
    console.log( num1/num2)
}


else if( sign === '?'){
    console.log( 'syntax error')
}

