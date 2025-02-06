import './About.scss';

const About = () => {
  return (
    <div className="about">
        {/* <div className="about-title">
            <h1>About</h1>
        </div> */}
        <div className="about-card">
            <div className="about-card-img">
                <img src="https://images.unsplash.com/photo-1738696693336-7a24cea4e6f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Image" height={400} width={200} />
            </div>
            <div className="about-card-content">
                <div className="about-card-content-title">
                    <h2>It's me</h2>
                    <h2>JRS</h2>
                </div>
                <div className="about-card-content-subText">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellat eum deleniti provident quaerat vel aliquid non nesciunt minus corrupti, libero voluptatem minima molestiae facere sed impedit quidem ea reprehenderit temporibus commodi nobis, necessitatibus doloremque dolorum! Deserunt eius quidem atque.</span>
                </div>
                <div className="about-card-content-list">
                    <ul>
                        <li>I am best</li>
                        <li>I am best</li>
                        <li>I am best</li>
                        <li>I am best</li>
                    </ul>
                </div>
                <div className="about-card-content-action-btn">
                    <button>Know More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About