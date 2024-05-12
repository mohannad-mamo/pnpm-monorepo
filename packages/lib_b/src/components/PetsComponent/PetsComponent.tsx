import { PetsComponentProps } from "./types";
import { Pet } from "@mohannad/lib_ab";

// 5 pets
export const STATIC_PETS: Pet[] = [
    
    {
        name: "Fido",
        type: 'dog'
    },
    {
        name: "Spot",
        type: 'cat'
    },
    {
        name: "Rover",
        type: 'dog'
    },
    {
        name: "Fluffy",
        type: 'dog'
    },
    {
        name: "Whiskers",
        type: 'cat'
    }
]
export function PetsComponent({showNames}: PetsComponentProps){
    return (<>
        <p>Pets Component</p>
        <p>{showNames ? STATIC_PETS.length: STATIC_PETS.map(person => person.name).join(', ')}</p>
        </>)
}