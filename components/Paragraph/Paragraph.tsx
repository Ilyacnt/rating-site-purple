import { ParagraphProps } from './Paragraph.props'
import styles from './Paragraph.module.css'
import cn from 'classnames'

export const Paragraph = ({ size = 'm', children, className, ...attrs }: ParagraphProps): JSX.Element => {
    return (
        <p className={cn(styles.paragraph, styles[size], className)} {...attrs}>
            {children}
        </p>
    )
}
