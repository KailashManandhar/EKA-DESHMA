
import bhoot from "./../../public/bhoot.png"
export default function Home() {
    return (<>
        <div className="homeBody">
            <p className="hero-text">एक देशमा.....</p>
            <div className="ghostDiv">
                <img src={bhoot} alt="bhoot ko image" className="ghost-logo" />
            </div>
            <p className="hero-text">The online home of paranormal sightings</p>

        </div>
    </>
    )
}