const root = document.querySelector('#root')
const textTitle = 'Difficuty'

// Tagged Template String - primeiro css e depois o texto
const title = Title`
    color: #82589F; 
    font-size: 4rem;
    letter-spacing: 1.5px;
    margin-bottom: 4rem;
    ${textTitle}
`
//TEXTO DENTRO DE CRASE  = TEMPLATE STRING 
//MDN tagged template string


root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
root.insertAdjacentHTML('beforeend', slide)