import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { LayoutProps } from './Layout.props'
import { Sidebar } from './Sidebar/Sidebar'
import styles from './Layout.module.css'

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.main}>{children}</div>
            <Footer className={styles.footer} />
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>): React.FC<T> => {
    return (props: T): JSX.Element => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
