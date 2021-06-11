import React from 'react'
import Head from 'next/Head'
import Div1 from '../components/page1/Div1'
import Div2 from '../components/page1/Div2'
import Div3 from '../components/page1/Div3'
import Div4 from '../components/page1/Div4'

const Home = () => {
    return (
        <div>
            <Head>
                <title>Homepage</title>
            </Head>

            <main>
                <Div1 />
                <Div2 />
                <Div3 />
                <Div4 />
            </main>
        </div>
    )
}

export default Home
