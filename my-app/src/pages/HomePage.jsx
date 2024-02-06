import University from "../components/University/University";
import Tutors from "../components/Tutors/Tutors"
import Cities from "../components/Cities/Cities";
import { useState } from "react";

function HomePage() {
    const [, setColor] = useState('verde')

    return (
        <>
            <University />
            <label >
                <span>Color</span>
                <input type="text" onChange={(e) => setColor(e.target.value)} />
            </label>
            <Tutors />
            <Cities />
        </>
    )
}

export default HomePage;