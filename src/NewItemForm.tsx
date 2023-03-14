import { useState } from "react"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles"

type NewItemFormProps = {
    onAdd(text:string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) =>{
    const [text, setText] = useState("")

    return (
        <NewItemFormContainer>
            <NewItemInput value={text} onChange={e=>setText(e.target.value)}/>
            {/*this component uses a controlled input, we store the value for it in
             the text state. Whenever you type inside this iput, the text state is updated */}
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
    // Here we didn't have to provide any type for the event argument of our onChange callback.
    // Typescript gets the typefrom React type definitions
   
}