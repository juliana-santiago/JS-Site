//Array

//Primeiro jeito
function Title (css, textContent) {
    return `
        <h1 style="${css[0]}">
            ${textContent}
        <h1>
        `
}


//Segundo jeito
// function Title (css, ...values) {
//     return `
//         <h1 style="${css[0]}${css[1]}">
//             ${values[0]}
//             <br>
//             <small>${values[1]}</small>
//             <br>
//             <em>${values[2]}</em>
//         <h1>`
// }

