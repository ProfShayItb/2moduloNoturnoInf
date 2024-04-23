import alunos from '../../data/alunos'

export default (props)=>{

    const lista = alunos.map((alunos)=> {
        return(
            <li key={alunos.id}>
                {alunos.id} - {alunos.nome} - {alunos.nota}
            </li>
        )
    })



    return(
        <section>
            <ul>
                {lista}
            </ul>
        </section>
    )
}