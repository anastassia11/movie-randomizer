import { Inter } from 'next/font/google'
import Image from 'next/image'
import update from '../../public/images/refresh.png'
import bg from '../../public/images/bg.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex h-[80%] flex-col items-center justify-center ${inter.className}`}>
      <div className='flex flex-col items-center'>
        <Image className='' src={bg} alt='bg' width={350} />
        <h1 className='font-semibold mb-4 text-lg'>Welcome to Movie Randomizer</h1>
        <p className='mb-6 text-center text-sm'>Add an element of surprise to your evening. The best films according to
          <a href='https://www.imdb.com/'
            className='text-yellow-500 font-bold hover:text-yellow-600'> IMDb</a>.</p>
        <button className='flex flex-row justify-center items-center space-x-3 px-4 py-2 rounded bg-violet-500 text-black font-semibold hover:bg-violet-600 active:bg-violet-700 active:shadow-inner'>
          <Image className='' src={update} alt='update' width={14} height={14} />
          <span>Get a movie</span>
        </button>
      </div>

    </main>

  )
}
