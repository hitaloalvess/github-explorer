import RepositoryItem from "./RepositoryItem"


const RepositoryList = () => {
    const repository = {
        name:'unform',
        description:'Form in React',
        link: 'https://github.com/unform/unform'
    }
    return (<section className="repository-list">
                <h1>Lista de repositórios</h1>

                <ul>
                    <RepositoryItem repository={repository}/>
                    <RepositoryItem repository={repository}/>
                    <RepositoryItem repository={repository}/>
                    <RepositoryItem repository={repository}/>
                </ul>
            </section>)
}
 
export default RepositoryList;