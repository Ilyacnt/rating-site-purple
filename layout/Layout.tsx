import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { LayoutProps } from './Layout.props'
import { Sidebar } from './Sidebar/Sidebar'
import styles from './Layout.module.css'
import { AppContextProvider, IAppContext } from '@/context/app.context'

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

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: React.FC<T>): React.FC<T> => {
    return (props: T): JSX.Element => {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        )
    }
}
