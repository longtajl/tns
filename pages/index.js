import Header from "../comps/header"
import Footer from "../comps/footer";
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
    return (
        <div className='font-mono h-screen w-screen md:min-h-full'>
            <Head>
                <title>tennis plus+</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header/>
            <div className="w-3/4 mx-auto">

                <div className='mt-6'>
                    <div>大会情報</div>
                    <ul className="text-sm list-none md:list-disc">
                        <li>
                            <Link href="/schedule/2021">
                                <a>2021年 関東ジュニアトーナメントスケジュール</a>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
