import { createContext,useContext,useState } from "react";

const AppContext = createContext()

const AppProvider = ({children})=> {
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [pokemon,setPokemon]=useState()

    return (
        <AppContext.Provider value={{open,setOpen, handleOpen,handleClose,pokemon,setPokemon}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}
export {AppContext,AppProvider}