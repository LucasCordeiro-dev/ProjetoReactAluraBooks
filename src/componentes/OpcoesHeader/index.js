import styled from 'styled-components'


const textoOpcoes = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE']

const Opcao = styled.li `
    font-size: 16px;
    min-width: 120px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 0 5px;
    cursor: pointer;
    height: 100%;`

const Opcoes = styled.ul`
    display:flex;`

function OpcoesHeader(){
    return (
        <Opcoes>
            {textoOpcoes.map( (texto) =>(
                <Opcao><p>{texto}</p></Opcao>))}
       </Opcoes>
    )
}

export default OpcoesHeader