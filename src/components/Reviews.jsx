import { getIdFromKey } from '@/utils/common'
import { BASE_URL } from '@/utils/constants'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from "../styles/Reviews.module.css"

export default function Reviews({ id }) {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const fetchReviews = async () => {
            const { data } = await axios.get(
                `${BASE_URL}/api/reviews?id=${getIdFromKey(id)}`
            )
            setReviews(data.reviews)
        }
        fetchReviews()
    }, [id])

    return (
        <div className={styles.list}>
            <h2>Reviews</h2>

            {reviews?.length ?
                <div className={styles.container}>
                    <div className={styles.reviews}>
                        {reviews.map(
                            ({
                                author: { displayName, userId },
                                authorRating,
                                reviewText,
                                reviewTitle,
                                submissionDate,
                            }) => (
                                <div className={styles.review} key={userId}>
                                    <div className={styles.user}>
                                        <div className={styles.header}>
                                            <div className={styles.author}>{displayName}</div>
                                            <div className={styles.date}>{submissionDate}</div>
                                        </div>

                                        {authorRating && (
                                            <div className={styles.rating}>
                                                <span>{authorRating}</span> / 10
                                            </div>
                                        )}
                                    </div>

                                    <div className={styles.content}>
                                        <div className={styles.title}>{reviewTitle}</div>
                                        {/* <Text text={reviewText} /> */}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div> : 'No rewiews yet'}
        </div>
    )
}
