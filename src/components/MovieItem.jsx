import Image from 'next/image'
import movieDefaultImg from '@/../public/images/default-movie.jpg'
import { convertDuration } from '@/utils/common'
import { useState } from 'react'
import Cast from './Cast'
import Reviews from './Reviews'
import styles from "../styles/Movie.module.css"

export default function MovieItem({
    id,
    title: { title, image, year, runningTimeInMinutes: duration },
    ratings: { rating },
    plotSummary: plot,
    plotOutline: shortPlot,
    genres,
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.movie}>
            <div className={styles.title}>
                <h1 className={styles.h1}>{title}</h1>
                {rating && (
                    <div className={styles.rating}>
                        <span>IMDb</span> {rating}
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.image}>
                    <Image
                        src={image ? image.url : movieImg}
                        alt={title}
                        width={image ? image.width : "300"}
                        height={image ? image.height : "300"}
                        quality="0.5"
                    />
                </div>

                <div className={styles.info}>
                    <div className={styles.about}>
                        {year && <div className={styles.year}>{year}</div>}
                        {duration && (
                            <div className={styles.duration}>{convertDuration(duration)}</div>
                        )}
                    </div>

                    <div className={styles.plot}>{plot?.text || shortPlot?.text}</div>

                    <div className={styles.genres}>
                        {genres.map((genre) => (
                            <div
                                key={genre}
                                className={styles.genre}
                                onClick={() => getByGenre(genre)}
                            >
                                {genre}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isOpen ?
                <>
                    <Cast id={id} />
                    <Reviews id={id} />
                </> : ''
            }
            <button className={styles.more}
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Hide info' : 'View more info'}
            </button>
        </div>

    )
}
