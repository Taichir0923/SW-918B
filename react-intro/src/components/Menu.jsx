import Navigation from './Navigation';

const headerItems = [{
    title: 'Home',
    path: "/"
} , {
    title: 'About',
    path: '/about'
} , {
    title: 'Service',
    path: '/service'
} , {
    title: 'Contact',
    path: '/contact'
}];

const Header = (props) => {
    return <header className="w-full text-white bg-red-400 flex items-center justify-between">
        <h1 className="font-bold text-xl px-4">{props.title}</h1>
        <Navigation items={headerItems} />
    </header>
}

export default Header;

// https://github.com/taichir0923/sw-918B