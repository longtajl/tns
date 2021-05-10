export default function Header({year}) {
    return (
        <div className="bg-black h-12">
            <div className="w-3/4 mx-auto">
                <div className="flex">
                    <h1 className="leading-10">{year}年 関東ジュニアトーナメントスケジュール</h1>
                    <a className='pt-1 ml-4 leading-10 text-xs'
                       target='_blank' href='https://www.kanto-tennis.com/jrguidefol/jrtournament.sc.pdf'>参照元</a>
                </div>
            </div>
        </div>
    )
}
