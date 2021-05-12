import Header from "../comps/header"
import Footer from "../comps/footer";
import Head from 'next/head'

export default function NotFound() {
    return (
        <div className='font-mono h-screen w-screen md:min-h-full'>
            <Head>
                <title></title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Header/>
            <div className="w-fullscreen sm:w-3/5 mx-auto p-1">
                <p className='text-center mt-10'>404</p>
            </div>
            <Footer/>
        </div>
    )
}
