
import Header from '../../components/Header';
import InfoUser from '../../components/InfoUser';
import SearchRepository from '../../components/SearchRepository';

import './styles.scss';

export default function Home(){

    return(
        <>
            <Header />
            <section className="home-container container">
                <h1 className="home-title">Explore repositórios no Github!</h1>
                <SearchRepository />
                <InfoUser />
            </section>
        </>
    );
}