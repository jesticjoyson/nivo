import { ComputedLink } from './types'
import { Link } from './Link'

interface LinksProps<Datum extends object> {
    links: ComputedLink<Datum>[]
}

export const Links = <Datum extends object>({ links }: LinksProps<Datum>) => {
    return (
        <g>
            {links.map(link => {
                return <Link key={link.id} link={link} />
            })}
        </g>
    )
}