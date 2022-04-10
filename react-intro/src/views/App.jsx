import Header from "../components/Menu";
import Container from "../components/Container";
import AnimeCard from "../components/AnimeCard";
import {animeList} from '../data/dummy';
import Banner from "../components/Banner";

const App = () => {
    return <div className="w-full">
        <Header title="MNFANSUBS" />
        <main className="w-full py-[1.5rem]">
            <Container>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
                    {
                        animeList.map((anime , index) => {
                            return <AnimeCard title={anime.title} url={anime.url} key={`anime-${index}`} />
                        })
                    }
                </div>
                <Banner />
            </Container>
        </main>
    </div>
}

export default App;