import Head from 'next/head'
import Nav from './Nav';
import Scene from './Scene';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap" rel="stylesheet"/>
            </Head>
            {children}
            <div className='scene-wrapper'>
                <Scene/>
            </div>
            <Nav />
        </div>
    );
};

export default Layout;