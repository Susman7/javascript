
const details = [
    'Bright',
    12,
    'Male',
    'Am a programmer',
    false,
    [1,2,3,4, ['Jude', [4, 5, 6], 'female']],
]

console.log(details[5][4][2])


const myDetails = [
    'Class One',
    ['no of students is : ', [1, 2, 3]],
    'Class Two',
    [10, 'my is positive : ', false, true],
    'Class Three',
    ['and is ', 'my negative : ', false, true]
]


console.log(myDetails[1][0] + myDetails[3][0]) 
console.log(myDetails[3][1].slice(3,17) + myDetails[3][3])
console.log(myDetails[5][0] + myDetails[5][1].slice(3,14) + myDetails[5][2])


const fruits = [ 'mango', 'Orange', 'banana', 'apple']
console.log(fruits.pop())
fruits.push('grape')
console.log(fruits)
