import Header from "./Components/Header.jsx"

import cardDatas from "./data/toonData.js"
import Cards from "./Components/ToonCards.jsx"


export default function App()
{

    const cardElements = cardDatas.map((element) =>
    {
        return <Cards image={element.image}
            title={element.title} />
    })

    return (
        <>
            <Header />
            <main className="mainLibrary">
                {cardElements}
            </main>
        </>
    )
}