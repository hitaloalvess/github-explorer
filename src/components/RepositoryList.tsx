import RepositoryItem from "./RepositoryItem"
import { useEffect, useState } from "react";

import '../styles/repository.scss';

interface Repository{
    name:string;
    description:string;
    html_url:string;
}

export function RepositoryList(){
    
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect( () => {
        fetch('https://api.github.com/users/hitaloalvess/repos')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setRepositories(data)
        });
    }, []);
    

    return (<section className="repository-list">
                <h1>Lista de repositórios</h1>

                <ul>
                    {repositories.map((repository, index) => {
                        return <RepositoryItem key={index} repository={repository}/> 
                    })}
                </ul>
            </section>)
}
 
// export default RepositoryList;