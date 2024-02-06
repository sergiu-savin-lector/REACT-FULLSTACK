import { createContext, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const ColorContext = createContext('green')

const SharedLayout = () => {
    const [color] = useState('verde')

    return (
        <ColorContext.Provider value={color}>
            <main className='App'>
                <Sidebar />
                <section className="container">
                    <Outlet/>
                </section>
            </main>
        </ColorContext.Provider>
    )
}

export default SharedLayout;