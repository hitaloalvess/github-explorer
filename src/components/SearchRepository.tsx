
import { FormEventHandler } from 'react';
import '../styles/searchRepository.scss'

interface SearchRepositoryProps{
    handleSubmit: FormEventHandler<HTMLFormElement>;
    setUrl: (url : string) => void;
    url: string;
}

export default function SearchRepository( { handleSubmit, url, setUrl } : SearchRepositoryProps){

    return(
        <form className="search-container" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Digite o username.."
                value={url}
                onChange={e => setUrl(e.target.value)}
            />
            <button type="button">Pesquisar</button>

            
        </form>
    );
}