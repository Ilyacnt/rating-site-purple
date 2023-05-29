import { Button, Heading, Paragraph, Tag, Rating } from '@/components'
import { withLayout } from '@/layout/Layout'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import axios from 'axios'
import { MenuItem } from '@/interfaces/menu.interface'

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
    const [userRating, setUserRating] = useState<number>(3)

    return (
        <>
            {menu.map((el) => (
                <div>{el._id.secondCategory}</div>
            ))}
            <Rating rating={userRating} setRating={setUserRating} isEditable />
            <Heading tag="h1">Some shit</Heading>
            <Heading tag="h2">Some h2 shit</Heading>
            <Heading tag="h3">Some h3 shit</Heading>
            <Button onClick={() => console.log('Click!')} appearance="primary" arrow="right">
                Make magic ✨
            </Button>
            <Button appearance="ghost" arrow="right">
                Boo ~ 👻
            </Button>
            <Paragraph size="m">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit perferendis vel hic illum
                eveniet commodi tempore
            </Paragraph>
            <Paragraph size="l">
                Fraesentium voluptatem dignissimos autem eum atque nihil, officiis officia quis aliquam sunt ullam!
            </Paragraph>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <Tag appearance="ghost" href="/favicon.ico">
                    Ghost
                </Tag>
                <Tag appearance="gray">Gray</Tag>
                <Tag appearance="green">Green</Tag>
                <Tag appearance="primary" size="s">
                    Score
                </Tag>
                <Tag appearance="red">Red</Tag>
            </div>
        </>
    )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0

    const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory,
    })

    return {
        props: {
            menu,
            firstCategory,
        },
    }
}

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[]
    firstCategory: number
}
