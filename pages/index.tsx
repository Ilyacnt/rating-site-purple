import { Button, Heading, Paragraph } from '@/components'

export default function Home(): JSX.Element {
    return (
        <div>
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
        </div>
    )
}
