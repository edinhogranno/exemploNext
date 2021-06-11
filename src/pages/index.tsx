import React, { useState } from 'react'
import Head from 'next/Head'
import Div1 from '../components/page1/Div1'
import Div2 from '../components/page1/Div2'
import Div3 from '../components/page1/Div3'
import Div4 from '../components/page1/Div4'

type State = {
    step: 'INICIAL' | 'FINAL'
    divLeft: string
}

const Home = () => {
    const [state, setState] = useState<State>({
        step: 'INICIAL',
        divLeft: '-110%'
    })

    const animou = () => {
        if (state.step === 'INICIAL') {
            setState({ step: 'FINAL', divLeft: '0' })
        }
    }
    return (
        <div>
            <Head>
                <title>Homepage</title>
            </Head>

            <main>
                <Div1 divLeft={state.divLeft}></Div1>
                <button onClick={animou}>Animar</button>
                <Div2 />
                <Div3 />
                <Div4 />
            </main>
        </div>
    )
}

export default Home
