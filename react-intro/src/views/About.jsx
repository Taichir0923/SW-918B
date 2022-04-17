import {Fragment , useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import Header from "../components/Menu";
const About = () => {
    const {data} = useFetch('https://jsonplaceholder.typicode.com/users');

    useEffect(() => {
        console.log(data)
    } , [data])
    return <Fragment>
        <Header title="About" />
    </Fragment>
}

export default About;
// React fragment