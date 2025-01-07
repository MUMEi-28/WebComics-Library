import Header from "./Components/Header.jsx"
import Cards from "./Components/ToonCards.jsx"


import cuteSpy from "./images/cuteSpy.jpg"
import estateDesigner from "./images/estateDesigner.jpg"
import killedAcademy from "./images/killedAcademy.jpg"
import latnaSaga from "./images/latnaSaga.jpg"
import positivelyYours from "./images/positivelyYours.jpg"
import promisedOrchid from "./images/promisedOrchid.jpg"
import scorchingRomance from "./images/scorchingRomance.jpg"
import sheHopeless from "./images/sheHopeless.jpg"
import soloLeveling from "./images/soloLeveling.jpg"
import TBATE from "./images/TBATE.jpg"
import tombRaider from "./images/tombRaider.jpg"
import twoWeeks from "./images/twoWeeks.jpg"


export default function App()
{
    return (
        <>
            <Header />
            <main className="mainLibrary">

                <Cards
                    image={cuteSpy}
                    title="Such A Cute Spy" />
                <Cards
                    image={estateDesigner}
                    title="The Greatest Estate Designer" />
                <Cards
                    image={killedAcademy}
                    title="I Killed An Academy Player" />
                <Cards
                    image={latnaSaga}
                    title="Survival Of A Sword King" />
                <Cards
                    image={positivelyYours}
                    title="Positively Yours" />
                <Cards
                    image={promisedOrchid}
                    title="Promised Orchid" />
                <Cards
                    image={scorchingRomance}
                    title="Scorching Romance" />
                <Cards
                    image={sheHopeless}
                    title="She's Hopeless" />
                <Cards
                    image={soloLeveling}
                    title="Solo Leveling" />
                <Cards
                    image={TBATE}
                    title="The Beginning After The End" />
                <Cards
                    image={tombRaider}
                    title="Tomb Raider King" />
                <Cards
                    image={twoWeeks}
                    title="Two Weeks And Counting" />

            </main>
        </>
    )
}