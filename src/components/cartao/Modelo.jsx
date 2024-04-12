import './modelo.css'

export default props =>{
   const estilo = {
        backgroundColor: props.cor || '#f00',
        borderColor: props.cor || '#f00'
   }
    return(
        <div className="cartao" style={estilo}>
            <div className="titulo">{props.titulo}</div>
            <div className="conteudo">{props.children}</div>
        </div>
    )
}