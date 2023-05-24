import { request } from '@/utils/common'

export default async function handler(req, res) {
    try {
        const { id } = req.query
        const { data } = await request({
            url: `title/get-overview-details`,
            params: { tconst: id }
        })
        data && res.status(200).json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json('Error during fetching movie')
    }
}
