// import { Inter } from 'next/font/google'
import Image from 'next/image'
import bg from '../../public/images/bg.png'
import GetButton from '@/components/buttons/GetButton'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-[80%]'>
      <div className='flex flex-col items-center'>
        <Image className='' src={bg} alt='bg' width={350} />
        <h1 className='font-semibold mb-4 text-lg'>Welcome to Movie Randomizer</h1>
        <p className='mb-6 text-center text-sm'>Add an element of surprise to your evening. The best films according to
          <a href='https://www.imdb.com/'
            className='text-yellow font-bold hover:text-yellow-600'> IMDb</a>.</p>
        <GetButton />
      </div>
    </div>

  )
}

