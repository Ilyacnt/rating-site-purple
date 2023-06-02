import { Menu } from '../Menu/Menu'
import { SidebarProps } from './Sidebar.props'

export const Sidebar = ({ ...attrs }: SidebarProps): JSX.Element => {
    return (
        <aside {...attrs}>
            <Menu />
        </aside>
    )
}
