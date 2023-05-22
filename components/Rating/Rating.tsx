import { useEffect, useState } from 'react'
import { RatingProps } from './Rating.props'
import StarIcon from './star.svg'
import styles from './Rating.module.css'
import cn from 'classnames'

export const Rating = ({ isEditable = false, rating, setRating, className, ...attrs }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map<JSX.Element>((element, index) => {
            return <StarIcon className={cn(styles.star, { [styles.filled]: index < currentRating })} />
        })
        setRatingArray(updatedArray)
    }

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    return (
        <div className={cn(styles.container, className)} {...attrs}>
            {ratingArray.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    )
}
