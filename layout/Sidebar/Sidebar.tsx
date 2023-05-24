import { SidebarProps } from './Sidebar.props'

export const Sidebar = ({ ...attrs }: SidebarProps): JSX.Element => {
    return <div {...attrs}>Sidebar</div>
}
