import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    appearance?: 'primary' | 'ghost' | 'red' | 'gray' | 'green'
    size?: 's' | 'm'
    href?: string
    children?: React.ReactNode
}
