import { HeaderProps } from './Header.props'

export const Header = ({ ...attrs }: HeaderProps): JSX.Element => {
    return <header {...attrs}>Header</header>
}
