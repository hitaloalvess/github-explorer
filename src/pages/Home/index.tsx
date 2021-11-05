import { FormEvent, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { RepositoryList } from '../../components/RepositoryList';
import SearchRepository from '../../components/SearchRepository';

import axios from 'axios';

import './styles.scss';

interface Repository{
    name:string;
    description:string;
    html_url:string;
    forks: number;
    stargazers_count: number;
    watchers: number;
}

export default function Home(){

    const [url, setUrl] = useState<string>('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect( () => {
        const data = localStorage.getItem('github-repositories')

        console.log(data)
    }, []);

    useEffect( () => {
        localStorage.setItem('github-repositories', JSON.stringify(repositories));
    }, [repositories])

    async function handleSubmit(event: FormEvent<HTMLFormElement>) : Promise<void>{
        console.log('Antes do preventDefault')
        event.preventDefault();
        console.log('Apos preventDefault')
        try{
            // await fetch(`https://api.github.com/repos/${url}`)
            // .then(resp => resp.json())
            // .then(data => {
            //     console.log(data);

            //     setRepositories(
            //         [...repositories, data]
            //     )
            // });

            const response = await axios.get<Repository>(`https://api.github.com/repos/${url}`)
            const { data }  = response

            setRepositories(
                [...repositories, data]
            )
        }catch(err){
            console.log('Error');
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