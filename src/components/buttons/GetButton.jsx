import Image from 'next/image'
import React from 'react'
import update from '../../../public/images/refresh.png'
import { useAppStore } from '@/store/store'
import { useRouter } from 'next/router'
import { BASE_URL } from '@/utils/constants'
import { getIdFromKey } from '@/utils/common'

export default function GetButton() {
    const router = useRouter()
    const { items } = useAppStore()

    const handleGetMovieClick = () => {
        items.length && router.push(`${BASE_URL}/${getIdFromKey(items[0])}`)
    }

    return (
        <button onClick={handleGetMovieClick}
            className='flex flex-row justify-center items-center space-x-3 px-4 py-2 rounded bg-violet-500 text-black font-semibold hover:bg-violet-600 active:bg-violet-700 active:shadow-inner'>
            <Image className='' src={update} alt='update' width={14} height={14} />
            <span>Get a movie</span>
        </button>
    )
}
