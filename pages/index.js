import Head from 'next/head';
import fetch from 'node-fetch';

import SideBar from '../components/Sidebar';

var Home = props => {
    return (
        <div className="container">
            <Head>
                <title>Florian Duquesne</title>
            </Head>

            <SideBar infos={props.infos} />
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/fduquesne');
    const user = await res.json();

    return {
        props: {
            infos: {
                username: user.login,
                name: user.name,
                bio: user.bio,
                company: user.company,
                location: user.location,
                email: user.email,
                avatar: user.avatar_url,
                github_url: user.html_url
            }
        }
    };
}

export default Home;
