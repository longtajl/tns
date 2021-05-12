import Header from "../comps/header"
import Footer from "../comps/footer";
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
    return (
        <div className='font-mono h-screen w-screen md:min-h-full'>
            <Head>
                <title>tennis plus+</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Header/>
            <div className="w-fullscreen sm:w-3/5 mx-auto p-1 flex">
                <div className='flex-auto m-1 sm:mt-6'>
                    <div className='mb-2'>
                        <h2>大会情報</h2>
                        <ul className="text-sm list-none md:list-disc">
                            <li>
                                <Link href="/schedule/2021">
                                    <a>2021年 関東ジュニアトーナメントスケジュール</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex-1 m-1 sm:mt-6'/>
            </div>
            <Footer/>
        </div>
    )
}
