interface RepositoryItemProps{
    repository:{
        name:string;
        description:string;
        html_url:string;
        forks: number;
        stargazers_count: number;
        watchers: number;
    }
}

const RepositoryItem = (props : RepositoryItemProps) => {
    return ( 
                <li>
                    <h3>{props.repository.name}</h3>
                    <p>{props.repository.description ? props.repository.description : 'Sem descrição'}</p>
                    <a href={props.repository.html_url}>
                        Acessar repositório
                    </a>
                 </li>
     );
}
 
export default RepositoryItem;