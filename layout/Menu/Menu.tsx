import { useContext } from 'react'
import { AppContext } from '@/context/app.context'
import styles from './Menu.module.css'
import cn from 'classnames'
import { FirstLevelMenyItem, MenuItem, PageItem } from '@/interfaces/menu.interface'
import { TopLevelCategory } from '@/interfaces/page.interface'
import HatIcon from './icons/hat.svg'
import CloudIcon from './icons/cloud.svg'
import BoxIcon from './icons/box.svg'
import BooksIcon from './icons/books.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const firstLevelMenu: FirstLevelMenyItem[] = [
    { route: 'courses', name: 'Курсы', icon: <HatIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Товары', icon: <BoxIcon />, id: TopLevelCategory.Products },
]

export const Menu = (): JSX.Element => {
    const { menu, firstCategory: firstCategory, setMenu } = useContext(AppContext)
    const router = useRouter()

    const openSecondLevel = (secondCategory: MenuItem['_id']['secondCategory']) => {
        setMenu &&
            setMenu(
                menu.map((item) => {
                    if (item._id.secondCategory === secondCategory) {
                        item.isOpened = !item.isOpened
                    }
                    return item
                })
            )
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((item) => (
                    <div key={item.route}>
                        <Link href={`/${item.route}`} className={styles.nonedecoration}>
                            <div
                                className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: item.id === firstCategory,
                                })}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        </Link>

                        {item.id === firstCategory && buildSecondLevel(item)}
                    </div>
                ))}
            </>
        )
    }

    const buildSecondLevel = (menuItem: FirstLevelMenyItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map((item) => {
                    if (item.pages.map((page) => page.alias).includes(router.asPath.split('/')[2])) {
                        item.isOpened = true
                    }
                    return (
                        <div key={item._id.secondCategory}>
                            <div
                                onClick={() => openSecondLevel(item._id.secondCategory)}
                                className={styles.secondLevel}
                            >
                                {item._id.secondCategory}
                            </div>
                            <div
                                className={cn(styles.secondLevelBlock, {
                                    [styles.secondLevelBlockActive]: item.isOpened,
                                })}
                            >
                                {buildThirdLevel(item.pages, menuItem.route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return pages.map((page) => (
            <Link
                scroll={false}
                href={`/${route}/${page.alias}`}
                className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath,
                })}
            >
                {page.title}
            </Link>
        ))
    }

    return <div className={styles.menu}>{buildFirstLevel()}</div>
}
