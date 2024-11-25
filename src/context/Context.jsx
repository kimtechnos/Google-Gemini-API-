import { createContext } from "react";
import run from "../config/gemini";
export const Context = createContext();
const contextProvider = (props) =>{
    const onSent = async(prompt) =>{
        await run(prompt)
    }
}
