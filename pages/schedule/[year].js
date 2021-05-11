import React, {useState} from "react";
import useSWR from 'swr';
import Header from "../../comps/header";
import Footer from "../../comps/footer";

async function fetcher(url) {
    const response = await fetch(url);
    return response.json();
}

export default function Page({year}) {
    const {data} = useSWR(`/api/schedule/${year}`, fetcher);
    const [keyword, setKeyword] = useState('')
    const [filterIndex, setFilterIndex] = useState([])

    const list = data ? data : [];
    const keys = list.length > 0 ? Object.keys(list[0]) : [];

    const trimText = (text) => {
        return text === -1 ? '' : text;
    }

    const onChangeKeyword = (text) => {
        setKeyword(text)
    }

    const onChangeFilterIndex = (index) => {
        if (filterIndex.includes(index)) {
            setFilterIndex(filterIndex.concat().filter(s => s !== index).sort())
        } else {
            setFilterIndex(filterIndex.concat([index]).sort())
        }
    }

    const filteredList = () => {
        if (keyword.length === 0) {
            return list;
        }
        const filterKeys = filterIndex.length === 0 ? keys : filterIndex.map(i => keys[i]);
        return list.filter(d => {
            const filterValues = filterKeys.map(s => d[s]).filter(s => s !== -1)
            return filterValues.filter(v => v.includes(keyword)).length > 0;
        })
    }

    return (
        <div className='h-screen w-screen relative'>
            <Header year={year}/>
            <div className="w-3/4 mx-auto absolute left-0 right-0 bottom-12 top-12">
                <div className='mb-4 text-xl flex'>
                    <h1>{year}年 関東ジュニアトーナメントスケジュール</h1>
                    <span className='ml-4 leading-10 text-xs'>※最新情報はこちらからご確認ください</span>
                    <a className='ml-1 leading-10 text-xs'
                       target='_blank' href='https://www.kanto-tennis.com/jrguidefol/jrtournament.sc.pdf'>参照元</a>
                </div>
                <div className="text-sm h-20">
                    <div className="pb-2 pl-1 flex">
                        <div className='mr-2'>テキストで絞り込む</div>
                        {keys.map((s, i) => {
                            return (
                                <div className='ml-2' key={`checkbox_${i}`}>
                                    <input id={`key_${i}`} className='h-6 align-middle' type="checkbox" name="key"
                                           value={i}
                                           onChange={(e) => {
                                               onChangeFilterIndex(parseInt(e.target.value))
                                           }}
                                    />
                                    <label htmlFor={`key_${i}`} className="ml-1">{s}</label>
                                </div>
                            )
                        })}
                    </div>
                    <input
                        className="shadow appearance-none border rounded w-3/4 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={keyword} name="text" type="text" placeholder="keyword"
                        onChange={(e) => {
                            onChangeKeyword(e.target.value)
                        }}
                    />
                </div>
                <table className='table-auto text-xs'>
                    <thead className=''>
                    <tr className=''>
                        <td className='w-1/12 text-center pt-2 pb-2'>{keys[0]}</td>
                        <td className='text-center pt-2 pb-2'>{keys[1]}</td>
                        <td className='w-8 text-center pt-2 pb-2'>{keys[4]}</td>
                        <td className='text-center pt-2 pb-2'>{keys[2]}</td>
                        <td className='text-center pt-2 pb-2'>{keys[3]}</td>
                        <td className='text-center pt-2 pb-2'>{keys[5]}</td>
                        <td className='text-center pt-2 pb-2'>{keys[6]}</td>
                        <td className='w-1/6 text-center pt-2 pb-2'>{keys[8]}<br/>{keys[7]}</td>
                        <td className='w-1/12 text-center pt-2 pb-2'>{keys[9]}</td>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredList().map((d, i) => {
                        return (
                            <tr key={`_tr_${i}`}>
                                <td className='text-center p-1 border'>{d[keys[0]]}</td>
                                <td className='text-center p-1 border'>{d[keys[1]]}</td>
                                <td className='text-center p-2 border'>{trimText(d[keys[4]])}</td>
                                <td className='text-left p-2 border'>{d[keys[2]]}</td>
                                <td className='text-left p-2 border'>{trimText(d[keys[3]])}</td>
                                <td className='text-left p-2 border'>{trimText(d[keys[5]])}</td>
                                <td className='text-left p-2 border'>{trimText(d[keys[6]])}</td>
                                <td className='text-left p-2 border'><a href={d[keys[8]]}
                                                                        target="_blank">{trimText(d[keys[8]])}</a><br/>{d[keys[7]]}
                                </td>
                                <td className='text-left p-2 border'>{trimText(d[keys[9]])}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const year = ctx.query.year;
    return {props: {year}}
}


