import Head from 'next/head';
import fetch from 'node-fetch';

import SideBar from '../components/Sidebar';

let Home = props => {
    return (
        <div className="container">
            <Head>
                <title>Florian Duquesne</title>
                <script src="./javascript/snowfall.js"></script>
            </Head>

            <SideBar infos={props.infos} />
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/fduquesne');
    let user;

    if (res.status == 200) {
        user = await res.json();
    }

    return {
        props: {
            infos: {
                username: user && user.login ? user.login : 'fduquesne',
                name: user && user.name ? user.name : 'Florian Duquesne',
                bio: user && user.bio ? user.bio : '🚀DevOps & 👨🏼‍💻Front and Back-end Javascript Developer',
                company: user && user.company ? user.company : 'Freelance',
                location: user && user.location ? user.location : 'Lille - France',
                email: user && user.email ? user.email : 'fduquesne@icloud.com',
                avatar: user && user.avatar_url ? user.avatar_url : 'https://avatars1.githubusercontent.com/u/55619822?v=4',
                github_url: user && user.html_url ? user.html_url : 'https://github.com/fduquesne'
            }
        }
    };
}

export default Home;
