import RepositoryItem from "../RepositoryItem"
import { Repository } from "../../@types";

import './styles.scss';


interface RepositoryListProps{
    repositories: Repository[];
}

export default function RepositoryList( { repositories } : RepositoryListProps ){
    
   
    

    return (<section className="repository-list">
                <h1>Lista de repositórios</h1>

                <ul>
                    {repositories.map((repository, index) => {
                        return <RepositoryItem key={index} repository={repository}/> 
                    })}
                </ul>
            </section>)
}
 