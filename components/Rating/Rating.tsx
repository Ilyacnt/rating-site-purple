import { KeyboardEvent, useEffect, useState } from 'react'
import { RatingProps } from './Rating.props'
import StarIcon from './star.svg'
import styles from './Rating.module.css'
import cn from 'classnames'

export const Rating = ({ isEditable = false, rating, setRating, className, ...attrs }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    const changeDisplay = (ratingValue: number): void => {
        if (!isEditable) return
        constructRating(ratingValue)
    }

    const onClick = (ratingValue: number): void => {
        if (!isEditable) return
        setRating && setRating(ratingValue)
    }

    const handleSpace = (event: KeyboardEvent<SVGElement>, ratingValue: number) => {
        if (!isEditable || event.code !== 'Space') return
        setRating && setRating(ratingValue)
    }

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map<JSX.Element>((element, index) => {
            return (
                <StarIcon
                    className={cn({ [styles.filled]: index < currentRating, [styles.editable]: isEditable })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onClick={() => onClick(index + 1)}
                    onKeyDown={(event: KeyboardEvent<SVGElement>) => handleSpace(event, index + 1)}
                    tabIndex={isEditable ? 0 : -1}
                />
            )
        })
        setRatingArray(updatedArray)
    }

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    return (
        <div className={cn(styles.container, className)} onMouseLeave={() => changeDisplay(rating)} {...attrs}>
            {ratingArray.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    )
}
