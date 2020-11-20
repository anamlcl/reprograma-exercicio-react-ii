import { useState, useEffect } from 'react'

const Repositories = (props) => {

    const [ repositories, setRepositories ] = useState([])
    const [ filtroRepos, setFiltroRepos ] = useState([])
    const [ busca, setBuscaRepos ] = useState('')

    useEffect(() => {

        async function getData() {

            const response = await fetch('https://api.github.com/users/anamlcl/repos')
            const data = await response.json()
            // console.log(data)

            setRepositories(data)

        }

        getData()

    }, [])

    useEffect(() => {

        setFiltroRepos(

            repositories.filter(repository => {

                return repository.name.includes(busca)

            })

        )

    }, [repositories, busca])

    return (

        <div>
            <h1>{props.text}</h1>
            <h2>Meu Portfólio: {repositories.length} repos</h2>
            <input 
            
            type='text' 
            placeholder='Digite um repositório'
            onChange={e => {setBuscaRepos(e.target.value)}}
            
            />

            <ul>

                {filtroRepos.map(repository => {
                    
                    return <li key={repository.id}>{repository.name}</li>

                })}

            </ul>

        </div>


    )

}

export default Repositories











