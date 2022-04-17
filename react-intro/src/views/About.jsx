import {Fragment , useEffect , useState} from 'react';
import useFetch from '../hooks/useFetch';
import Header from "../components/Menu";
import { useLocation } from 'react-router-dom';
const About = () => {
    const {search} = useLocation();
    const id = new URLSearchParams(search).get('user');
    
    const {data} = useFetch('https://jsonplaceholder.typicode.com/users/' + id);


    useEffect(() => {
        console.log(data)
    } , [data])
    return <Fragment>
        <Header title="About" />
    </Fragment>
}

export default About;
// React fragment

// posts => (ng shirheg post (comment)) , albums => (ng shirheg album (zurag)) , todos