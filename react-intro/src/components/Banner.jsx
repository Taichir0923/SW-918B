import {Component} from 'react';

class Banner extends Component {
    // state = {
    //     val: "class state value",
    //     val1: "second value"
    // }

    // classEventHandler = () => {
    //     this.setState({
    //         val: "new Value"
    //     })
    // }

    render(){
        const {bannerValue} = this.props;
        return <div className='w-full h-96 bg-black flex items-center justify-center text-white'>
            <h1 className='text-3xl'>{bannerValue}</h1>
        </div>
    }
}

export default Banner;