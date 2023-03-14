import { useState } from "react";
import { AddItemButton } from "./styles"

type AddNewItemProps = {
    onAdd(text:string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark } = props;
    if (showForm) {
        // We show item creation form here
    }
    return (
        <AddItemButton dark={dark} onClick={()=> setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
    // AddNewItem holds a showForm boolean state, when this state is true
    // we show an input with the "Create" button , when it's false, we
    // render the button with toggleButtonText on it.
}