import MovieItem from '@/components/MovieItem'
import { BASE_URL } from '@/utils/constants'
import axios from 'axios'
import React from 'react'

export default function Movie({ movie }) {
    return (
        <div className='flex flex-col items-center justify-center mt-8'>
            <MovieItem {...movie} />
        </div>

    )
}
export async function getServerSideProps({ query }) {
    const { data } = await axios.get(`${BASE_URL}/api/movie?id=${query.id}`)
    return {
        props: {
            movie: data
        }
    }
}
