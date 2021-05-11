import Header from "../comps/header"
import Footer from "../comps/footer";
import Link from 'next/link'

export default function Home() {
    return (
        <div className='h-screen w-screen relative'>
            <Header/>
            <div className="w-3/4 mx-auto absolute left-0 right-0 top-12 bottom-10">
                <div className='mt-6'>
                    <ul className="list-none md:list-disc">
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
