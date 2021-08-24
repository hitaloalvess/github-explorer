const RepositoryItem = ({repository}) => {
    return ( 
                <li>
                    <h3>{repository.name}</h3>
                    <p>{repository.description ? repository.description : 'Sem descrição'}</p>
                    <a href={repository.html_url}>
                        Acessar repositório
                    </a>
                 </li>
     );
}
 
export default RepositoryItem;