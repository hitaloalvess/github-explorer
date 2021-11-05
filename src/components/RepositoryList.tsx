import RepositoryItem from "./RepositoryItem"
import { useEffect, useState } from "react";

import '../styles/repository.scss';

interface Repository{
    name:string;
    description:string;
    html_url:string;
    forks: number;
    stargazers_count: number;
    watchers: number;
}

interface RepositoryListProps{
    repositories: Repository[];
}

export function RepositoryList( { repositories } : RepositoryListProps ){
    
   
    

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