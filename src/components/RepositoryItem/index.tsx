import { Repository } from "../../@types";
import { IoGitNetworkOutline } from 'react-icons/io5'
import { FiArrowRight, FiStar } from "react-icons/fi";

import './styles.scss';

interface RepositoryItemProps{
    repository: Repository;
}


const RepositoryItem = ({repository} : RepositoryItemProps) => {
    return ( 
                <li className="infoUser-card">
                    <a href={repository.html_url} >
                        <div className="card-image">
                            <img src={repository.owner.avatar_url} alt="avatar do repositório" />
                        </div>
                        <div className="content">
                            <div className="info">
                                <h1>{repository.full_name}</h1>
                                <div className="description">
                                    {repository.description}
                                </div>
                                <div className="forks-stars">
                                    <div className="forks">
                                        <IoGitNetworkOutline /> Forks
                                        <p>{repository.forks}</p>
                                    </div>
                                    <div className="stars">
                                        <FiStar /> Star
                                        <p>{repository.stargazers_count}</p>
                                    </div>
                                </div>
                            </div>
                            <FiArrowRight className="arrowRight" />
                        </div>
                    </a>
                 </li>
     );
}
 
export default RepositoryItem;