import type {  Person } from "@mohannad/lib_ab";
import { STATIC_PETS } from "@mohannad/lib_b";
import type{  PeopleComponentProps } from "./types";

// Fake 5 people
const STATIC_PEOPLE: Person[] = [
    {
        name: "John Doe",
        age: 30,
        pets: [STATIC_PETS[0], STATIC_PETS[1]]
    },
    {
        name: "Jane Doe",
        age: 25,
        pets: []
    },
    {
        name: "Alice",
        age: 35,
        pets: []
    },
    {
        name: "Bob",
        age: 40,
        pets: []
    },
    {
        name: "Charlie",
        age: 45,
        pets: []
    }
]

export function PeopleComponent({showNames}: PeopleComponentProps){
    return (<>
    <p>People Component</p>
    <p>{showNames ? STATIC_PEOPLE.length: STATIC_PEOPLE.map(person => person.name).join(', ')}</p>
    </>)
}