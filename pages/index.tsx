import { Button, Heading, Paragraph, Tag, Rating } from '@/components'
import { withLayout } from '@/layout/Layout'
import { useState } from 'react'

function Home(): JSX.Element {
    const [userRating, setUserRating] = useState<number>(3)

    return (
        <>
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
