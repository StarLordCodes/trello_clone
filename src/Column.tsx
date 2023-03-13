import { ColumnContainer, ColumnTitle } from "./styles"
import { FC } from "react"

type ColumnProps = {
    // text?: string // to make it optional add ? otherwise we get type error 
    // if we dont provide this prop to the component
    text: string // we want it to be a required field
    children?: React.ReactNode // manually adding children to ColumnProps
}
// we could also write 
// type ColumnProps = React.PropsWithChildren<{text: string}>
// this is same as using the intersection
// type ColumnProps = {text: string} & {children?:React.ReactNode}

export const Column: FC<ColumnProps> = ( { text, children }) => {
    return(
    <ColumnContainer>
        <ColumnTitle>
            {text}
        </ColumnTitle>
        { children }
    </ColumnContainer>
    )
}