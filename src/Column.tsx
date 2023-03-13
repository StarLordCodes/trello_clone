import { ColumnContainer, ColumnTitle } from "./styles"

type ColumnProps = {
    // text?: string // to make it optional add ? otherwise we get type error 
    // if we dont provide this prop to the component
    text: string // we want it to be a required field
}

export const Column = ( { text }: ColumnProps) => {
    return(
    <ColumnContainer>
        <ColumnTitle>
            {text}
        </ColumnTitle>
    </ColumnContainer>
    )
}