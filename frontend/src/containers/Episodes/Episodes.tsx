import { EpisodeCard } from "../../components"
import "./Episodes.scss"

const Episodes = () => {
  return (
    <div className="episodes">
        <div className="episodes-title-section">
            <h2>Our Most Recent <br /> Episodes</h2>
            <div className="episodes-title-section-action-btn">
                <button>View All</button>
            </div>
        </div>
        <div className="episodes-main__container">
            <EpisodeCard />
        </div>
    </div>
  )
}

export default Episodes