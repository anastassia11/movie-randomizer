import { BASE_URL } from '@/utils/constants'
import axios from 'axios'
import React from 'react'

export default function Movie({ movie }) {
    console.log(movie)
    return (
        <Movie {...movie} />
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
