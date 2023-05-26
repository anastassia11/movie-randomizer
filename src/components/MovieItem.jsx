import Image from 'next/image'
import movieDefaultImg from '@/../public/images/default-movie.jpg'
import { convertDuration } from '@/utils/common'
import { useState } from 'react'
import Cast from './Cast'
import Reviews from './Reviews'


export default function MovieItem({ id, title: { title, image, year, runningTimeInMinutes }, ratings: { rating }, genres, plotOutline, plotSummary }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex flex-col w-full lg:w-[60%] items-center lg:items-stretch '>
            <div className='flex flex-col lg:flex-row justify-between items-center space-y-4'>
                <h1 className='text-2xl lg:text-3xl font-bold'>{title}</h1>
                {rating && <div className='hidden lg:flex flex-row '>
                    <a href='https://www.imdb.com/' className='bg-yellow text-base text-black font-bold p-1 rounded-md'>IMDb</a>
                    <span className='pl-2 font-semibold text-gray'>{rating}</span>
                </div>}
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-stretch pt-8'>
                <Image src={image ? image.url : movieDefaultImg} width={1000} height={1000} alt={title}
                    className='rounded-lg w-[80%] lg:w-[300px]' />
                {rating && <div className='flex flex-row items-center pt-8 lg:hidden'>
                    <a href='https://www.imdb.com/' className='bg-yellow text-base text-black font-bold p-1 rounded-md'>IMDb</a>
                    <span className='pl-2 font-semibold text-gray'>{rating}</span>
                </div>}
                <div className='flex flex-col justify-between lg:px-8'>
                    <div>
                        <div className='flex flex-row lg:flex-col justify-between'>
                            {runningTimeInMinutes && <p className='font-semibold text-gray'>{convertDuration(runningTimeInMinutes)}</p>}
                            {year && <p className='font-semibold text-gray'>{year}</p>}
                        </div>
                        <p className='py-4 text-center lg:text-left'>
                            {plotSummary?.text || plotOutline?.text}
                        </p>
                    </div>
                    <div className='flex flex-row space-x-2 justify-center lg:justify-start'>
                        {genres.map(genre => {
                            return <span key={genre}
                                className='py-1 px-4 border border-gray rounded-md text-gray'>{genre}</span>
                        })}
                    </div>
                </div>
            </div>
            {isOpen && (
                <>
                    <div>
                        <Cast id={id} />
                    </div>
                    <div>
                        <Reviews />
                    </div>
                </>

            )}
            <button onClick={() => setIsOpen(!isOpen)}
                className='self-center bg-white py-4 px-16 mt-8 lg:mt-16 w-fit lg:w-[250px] text-black text-center font-semibold rounded-3xl hover:bg-zinc-200 active:bg-zinc-300'>
                {isOpen ? 'Hide info' : 'View more info'}
            </button>
        </div>

    )
}
