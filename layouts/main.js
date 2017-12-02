import Link from 'next/link'

import Head from '../components/head';
import Footer from '../components/footer';
import Nav from '../components/nav';

export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head />

        <header className="header header-shrink header-inverse fixed-top">
            <Nav />
        </header>

        { children }

        <Footer/>
    </div>
)