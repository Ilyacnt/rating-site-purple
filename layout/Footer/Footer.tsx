import { FooterProps } from './Footer.props'
import cn from 'classnames'
import { getYear } from 'date-fns'
import styles from './Footer.module.css'

export const Footer = ({ className, ...attrs }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...attrs}>
            <div className={cn(styles.text, styles.copyright)}>OwlTop © {getYear(new Date())} Все права защищены</div>
            <a href="#" className={cn(styles.text, styles.terms)}>
                Пользовательское соглашение
            </a>
            <a href="#" className={cn(styles.text, styles.privacy)}>
                Политика конфиденциальности
            </a>
        </footer>
    )
}
