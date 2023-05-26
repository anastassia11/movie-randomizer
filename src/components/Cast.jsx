import { getIdFromKey } from '@/utils/common'
import { BASE_URL } from '@/utils/constants'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

const getCastData = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/api/cast?id=${getIdFromKey(id)}`)
    return data.cast.slice(0, 6)
}

export default function Cast({ id }) {
    const [cast, setCast] = useState([])

    useEffect(() => {
        getCastData(id).then((data) => setCast(data))
    }, [id])

    const castData = useMemo(() => cast, [cast])

    return (
        <>
            <h1 className='text-xl font-semibold my-4 text-center'>Cast</h1>
            <div className='flex flex-row justify-between'>
                {castData.map(({ characters, id, image, name }) => <>
                    <Link href={`${BASE_URL}/actor/${getIdFromKey(id)}}`} key={id}>
                        <div className='w-28 flex flex-col items-center space-y-2'>
                            <div className='w-24 h-24 rounded-full overflow-hidden'>
                                {image ? <Image src={image.url} width={100} height={100} alt={name}
                                    className='h-full w-full object-cover' /> : <div className='h-full w-full object-cover bg-gray'></div>}

                            </div>
                            <p className='text-center text-sm font-semibold'>{name}</p>
                            {characters?.length && <p className='text-center text-gray text-xs'>{characters[0]}</p>}
                        </div>
                    </Link>
                </>)}
            </div>
        </>

    )
}


