//  _____           _           
// |_   _|         | |          
//   | |  _ __   __| | _____  __
//   | | | '_ \ / _` |/ _ \ \/ /
//  _| |_| | | | (_| |  __/>  < 
// |_____|_| |_|\__,_|\___/_/\_\
                            
import Head from 'next/head';
import Layout from '../components/layout/layout.jsx';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>AIChef - Home</title>
            </Head>
            <section>
                <p>👨‍🍳 OpenAI powered recipe and image generation</p>
            </section>
        </Layout>
    );
};