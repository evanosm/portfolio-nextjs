import Link from 'next/link';
import {useRouter} from 'next/router';


const Nav = () => {

    const router = useRouter();

    return (
        <div className="nav-wrapper">
             <Link href={"/"} ><a className={router.asPath == "/" ? 'active' : ''}>home</a></Link>
             <Link href={"/me"}><a className={router.asPath == "/me" ? 'active' : ''}>me</a></Link>
             <Link href={"/projects"}><a className={router.asPath == "/projects" ? 'active' : ''}>projects</a></Link>
             <Link href={"/contact"}><a className={router.asPath == "/contact" ? 'active' : ''}>contact</a></Link>
        </div>
    );
};

export default Nav;