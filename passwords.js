
// let keys = []
// let passwords = []
// const passwordGenerator = () => {
    //let arr = [...Array(3)].map(x => x = 0)

    let arr = [];
    let passwords = [];
    for(let i = 0; i < 1000; i++){
        passwords.push(`${i.toString().padStart(3, '0')}@globaltel`)
    }

    console.log(passwords);




//     for(let i = 0; i < 10; i++){
//         arr[2] = i
//         for(let i = 0; i < 10; i++){
//             arr[1] = i
//             for(let i = 0; i < 10; i++){
//                 arr[0] = i
//                 passwords.push(`${(arr.join(''))}@globaltel`)
//             }
//         }
//     }
//     return passwords
// }

// passwordGenerator();
export { passwords }
