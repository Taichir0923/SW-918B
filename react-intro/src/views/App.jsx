import {useState} from 'react';
import Header from "../components/Menu";
import Container from "../components/Container";
import AnimeCard from "../components/AnimeCard";
import {animeList} from '../data/dummy';
import Banner from "../components/Banner";
import Button from "../components/Button";
import Input from "../components/Input";

const App = () => {
    const [banner , setBanner] = useState(() => "Initial");
    const [inputValue , setInputValue] = useState(() => "");
    const dangerBtn = () => {
        setBanner(inputValue)
        setInputValue("");
    }

    const bannerValueHandler = (event) => {
        setInputValue(event.target.value)
    }

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
                <div className="my-8 flex flex-wrap items-center gap-4">
                    <Button click={dangerBtn} title="Danger" color="#f00" />
                    <Button title="Warning" color="#ff0" />
                    <Button title="Success" color="#0f0" />
                    <Button title="Primary" color="#00f" />
                    <Button title="Light" light/>
                    <Button title="Dark"/>
                </div>

                <div className="my-8">
                    <div className="w-[300px]">
                        <Input value={inputValue} change={bannerValueHandler} place="Email" />
                    </div>
                </div>

                <Banner bannerValue={banner} />
            </Container>
        </main>
    </div>
}

export default App;