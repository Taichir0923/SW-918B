import { useState, useEffect, useRef } from 'react';
import Header from "../components/Menu";
import Container from "../components/Container";
import AnimeCard from "../components/AnimeCard";
import { animeList } from '../data/dummy';
import Banner from "../components/Banner";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const App = () => {
    const [banner, setBanner] = useState(() => "Initial");
    const [inputValue, setInputValue] = useState(() => "");
    const [show, hide] = useState(false);
    // const [users, setUsers] = useState(() => []);
    // const [loader, setLoader] = useState(false);
    const input = useRef();
    const {data: users , loading: loader} = useFetch('https://jsonplaceholder.typicode.com/users')
    const dangerBtn = () => {
        setBanner(inputValue)
        setInputValue("");
    }

    const bannerValueHandler = (event) => {
        setInputValue(event.target.value)
    }
    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             setLoader(true);
    //             const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //             const result = await response.json();
    //             if (result) {
    //                 setLoader(false);
    //                 setUsers(result);
    //             }
    //         } catch (err) {
    //             setLoader(false);
    //         }
    //     }

    //     getData();
    // }, []);

    useEffect(() => {
        document.title = "Home"
    } , [])
    return <div className="w-full">
        <Header title="MNFANSUBS" />
        <main className="w-full py-[1.5rem]">
            <Container>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
                    {
                        animeList.map((anime, index) => {
                            return <AnimeCard title={anime.title} url={anime.url} key={`anime-${index}`} />
                        })
                    }
                </div>
                <div className="my-8 flex flex-wrap items-center gap-4">
                    <Button click={dangerBtn} title="Danger" color="#f00" />
                    <Button click={() => setBanner(input.current.value)} title="Warning" color="#ff0" />
                    <Button title="Success" color="#0f0" />
                    <Button title="Primary" color="#00f" />
                    <Button title="Light" light />
                    <Button click={() => hide(!show)} title="Dark" />
                </div>

                {
                    show && <Banner bannerValue={banner} />
                }

                <div className="my-8">
                    <div className="w-[300px]">
                        <Input value={inputValue} change={bannerValueHandler} place="Email" />
                    </div>
                </div>

                <input ref={input} type="text" className='border mb-4 border-black' />

                <Banner bannerValue={banner} />
                <div className='w-full'>
                    {
                        loader ? <p>loading</p> : users?.map((user, index) => (
                            <Link key={index} to={`/about?user=${user.id}`}>
                                <li className='w-full py-2 px-4 my-2'>
                                    {user.name}
                                </li>
                            </Link>
                        ))
                    }
                </div>
            </Container>
        </main>
    </div>
}

export default App;

// github.com/taichir0923/sw-918b