'use client'
import * as React from 'react'

export default function Template({ children}: { children: React.ReactNode }) {
    const [state, setState] = React.useState<number | null>(null);
    React.useEffect(() => {
        setState(Date.now())
    }, [])
    return (
        <>
            {/* <p onClick={() => setState(Date.now())}>Template component was created at {state}</p> */}
            {children}
        </>
    )
}