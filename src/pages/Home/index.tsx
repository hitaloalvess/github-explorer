import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { Repository } from '../../@types';

import Header from '../../components/Header';
import { RepositoryList } from '../../components/RepositoryList';
import SearchRepository from '../../components/SearchRepository';

import './styles.scss';

export default function Home(){

    const [url, setUrl] = useState<string>('');
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

    async function handleSubmit(event: FormEvent){

        event.preventDefault();
            
            if(!!!url){
                console.log('Digite um username/repositório valido')
                return;
            }

            try{
                const response = await axios.get<Repository>(`https://api.github.com/repos/${url}`)
                const { data }  = response

                console.log(data)
                if(!verifObjectDuplicate(data)){
                    setRepositories(
                        [...repositories, data]
                    )
                }else{
                    console.log('Repositório existente');
                    return;
                }


            }catch(error){
                console.log(`Erro: ${error}`)
            }
    }

    return(
        <>
            <Header />
            <section className="home-container container">
                <h1 className="home-title">Explore repositórios no Github!</h1>
                <SearchRepository handleSubmit={handleSubmit} setUrl={setUrl} url={url}/>
                {/* <InfoUser /> */}
                <RepositoryList repositories={repositories} />
            </section>
        </>
    );
}