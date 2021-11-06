
import { FormEvent, RefObject} from 'react';

import './styles.scss';

interface SearchRepositoryProps{
    handleSubmit: (event: FormEvent) => void;
    inputSearchRepositoryRef: RefObject<HTMLInputElement>;
    formRef: RefObject<HTMLFormElement>;
    messageError: string;
}



export default function SearchRepository( { handleSubmit, messageError, formRef, inputSearchRepositoryRef} : SearchRepositoryProps){

    return(
        <div className="search-container">
            <form className="form"  onSubmit={handleSubmit} ref={formRef}>
                <input 
                    type="text" 
                    placeholder="Digite o username.."
                    ref={inputSearchRepositoryRef}
                />
                <button type="submit">Pesquisar</button>
                
            </form>
            <p className="error-message">{messageError}</p>
        </div>
    );
}