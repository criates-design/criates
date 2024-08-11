import { createContext, useContext, useState, ReactNode } from 'react'

type CreditsContextType = {
    credits: number
    setCredits: (credits: number) => void
}

const CreditsContext = createContext<CreditsContextType | undefined>(undefined)

export const CreditsProvider = ({ children }: { children: ReactNode }) => {
    const [credits, setCredits] = useState(0)
    return (
        <CreditsContext.Provider value={{ credits, setCredits }}>
            {children}
        </CreditsContext.Provider>
    )
}

export const useCredits = () => {
    const context = useContext(CreditsContext)
    if (!context) {
        throw new Error('useCredits must be used within a CreditsProvider')
    }
    return context
}
