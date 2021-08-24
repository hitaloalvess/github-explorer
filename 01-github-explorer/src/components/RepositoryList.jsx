import RepositoryItem from "./RepositoryItem"
import { useEffect, useState } from "react";

import '../styles/repository.scss';

const repository = {
    name:'unform',
    description:'Form in React',
    link: 'https://github.com/unform/unform'
}

const RepositoryList = () => {
    
    const [repositories, setRepositories] = useState([]);

    useEffect( () => {
        fetch('https://api.github.com/users/hitaloalvess/repos')
        .then(resp => resp.json())
        .then(data => setRepositories(data));
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
 
export default RepositoryList;