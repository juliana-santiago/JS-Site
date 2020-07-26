const pathDiabinho = './image/diabinho.png'

const diabinho = Character `
    width: 18%; 
    ${pathDiabinho}
`
const WrapperCharacters = (css, children) => (`
   <div style="${css}">${children}</div>
`)

const wrapperCharacters = WrapperCharacters `
    display: flex;
    justify-content: space-evenly;
    ${diabinho + diabinho + diabinho};
`
