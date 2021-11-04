
import '../styles/searchRepository.scss'

export default function SearchRepository(){

    return(
        <form className="search-container">
            <input 
                type="text" 
                placeholder="Digite o username.."
            />
            <button>Pesquisar</button>

            
        </form>
    );
}