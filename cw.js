// const user = (name, Message) =>{
//     const result =  `${name} ${Message}`
//     return result

// }

// console.log(user(
//    prompt('Enter Username'),
//    prompt( 'Enter Welcome Message')
// ))

const myDetails = (fName, lName, age) => {
    return [fName, lName, age]
}

const myNewdetails = myDetails(
    prompt('Firstname'),
    prompt('Lastname'),
    prompt('Age')
)



const processDetails = (Message1, message2, message3) => {
    return `${Message1} ${myNewdetails[0]} ${myNewdetails[1]} ${message2} ${myNewdetails[2]} ${message3}`

};

console.log(processDetails( 'My name is : ','I am ', 'years old'))