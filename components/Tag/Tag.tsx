import { TagProps } from './Tag.props'
import cn from 'classnames'
import styles from './Tag.module.css'

export const Tag = ({ appearance = 'primary', size = 'm', href, className, children, ...attrs }: TagProps) => {
    return (
        <>
            {href ? (
                <div
                    className={cn(styles.tag, className, styles[appearance], styles[size], {
                        [styles.link]: href,
                    })}
                    {...attrs}
                >
                    <a href={href}>{children}</a>
                </div>
            ) : (
                <div className={cn(styles.tag, className, styles[appearance], styles[size])} {...attrs}>
                    {children}
                </div>
            )}
        </>
    )
}
