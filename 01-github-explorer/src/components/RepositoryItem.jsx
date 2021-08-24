const RepositoryItem = ({repository}) => {
    return ( 
                <li>
                    <h3>{repository.name}</h3>
                    <p>{repository.description}</p>
                    <a href={repository.link}>
                        Acessar repositório
                    </a>
                 </li>
     );
}
 
export default RepositoryItem;