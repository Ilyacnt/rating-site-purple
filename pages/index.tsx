import { Button, Heading } from '@/components'

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
        </div>
    )
}
