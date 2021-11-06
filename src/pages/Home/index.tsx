import { FormEvent, useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';

import { Repository } from '../../@types';

import Header from '../../components/Header';
import RepositoryList from '../../components/RepositoryList';
import SearchRepository from '../../components/SearchRepository';

import './styles.scss';

export default function Home(){

    const formRef = useRef<HTMLFormElement>(null);
    const inputSearchRepositoryRef = useRef<HTMLInputElement>(null);
    const [messageError, setMessageError] = useState<string>('')
    const [repositories, setRepositories] = useState<Repository[]>( () => {
        const repos = localStorage.getItem('github-repositories');

        if(repos){
            return JSON.parse(repos);
        }

        return [];
    });


    useEffect( () => {
        localStorage.setItem('github-repositories', JSON.stringify(repositories));
    }, [repositories])


    function verifObjectDuplicate(data : Repository){
        
        for(let repo of repositories){
            if(repo.id === data.id){
                return true;
            }
        }

        return false;
    }

    const handleSubmit = useCallback( async(event: FormEvent) => {
        event.preventDefault();
        
            if(!!!inputSearchRepositoryRef){
                setMessageError('Digite um username/repositório')
                return;
            }

            try{
                const response = await axios.get<Repository>(`https://api.github.com/repos/${inputSearchRepositoryRef.current?.value}`)
                const { data }  = response

                if(!verifObjectDuplicate(data)){
                    setRepositories(
                        [...repositories, data]
                    )
                }else{
                    setMessageError('Repositório existente');
                }

            }catch(error){
                setMessageError(`Digite um username/repositório válido`)
            }

            formRef.current?.reset();
    }, [inputSearchRepositoryRef.current?.value])

    return(
        <>
            <Header />
            <section className="home-container container">
                <h1 className="home-title">Explore repositórios no Github!</h1>
                <SearchRepository
                  handleSubmit={handleSubmit}
                  inputSearchRepositoryRef={inputSearchRepositoryRef}
                  formRef={formRef}
                  messageError={messageError}  
                />
                <RepositoryList repositories={repositories} />
            </section>
        </>
    );
}