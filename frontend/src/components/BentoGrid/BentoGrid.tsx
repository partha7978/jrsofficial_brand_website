import "./BentoGrid.scss";

const BentoGrid = () => {
  return (
    <div className="bento-grid">
      {/* First Row */}
      <div className="grid-item small">
        <img
          loading="lazy"
          src="https://plus.unsplash.com/premium_photo-1675700427405-f4cf90589055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjl8fHxlbnwwfHx8fHw%3D"
          alt="JRS Old Image"
        />
      </div>
      <div className="grid-item large">
        <h2>The Journey Started Here</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem harum laudantium ea aliquam ullam quisquam quibusdam
          consequuntur. Dicta recusandae dolorum expedita eum magni quas culpa
          soluta corrupti laborum repudiandae dignissimos sequi ducimus
          distinctio necessitatibus fugit officiis corporis error ipsam sunt,
          quam in tempore vel? Et cumque voluptatem quod molestias reprehenderit
          fuga odit atque, quo sunt ratione earum nam culpa animi, laudantium
          vitae tempora cupiditate sit debitis iure cum odio. Molestias, at vel
          ea consectetur laboriosam fugit ducimus molestiae tempora aut
          voluptates ad cumque vitae repudiandae officiis. Tempore natus ut
          libero necessitatibus itaque nemo amet cum aperiam vitae laudantium
          autem cumque velit aliquid dignissimos hic, totam eveniet in? Dolores
          quasi error praesentium dolore velit soluta accusantium! Amet qui
        </span>
      </div>

      {/* Second Row */}
      <div className="grid-item large">
      <h2>Now We Are Here</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem harum laudantium ea aliquam ullam quisquam quibusdam
          consequuntur. Dicta recusandae dolorum expedita eum magni quas culpa
          soluta corrupti laborum repudiandae dignissimos sequi ducimus
          distinctio necessitatibus fugit officiis corporis error ipsam sunt,
          quam in tempore vel? Et cumque voluptatem quod molestias reprehenderit
          fuga odit atque, quo sunt ratione earum nam culpa animi, laudantium
          vitae tempora cupiditate sit debitis iure cum odio. Molestias, at vel
          ea consectetur laboriosam fugit ducimus molestiae tempora aut
          voluptates ad cumque vitae repudiandae officiis. Tempore natus ut
          libero necessitatibus itaque nemo amet cum aperiam vitae laudantium
          autem cumque velit aliquid dignissimos hic, totam eveniet in? Dolores
          quasi error praesentium dolore velit soluta accusantium! Amet qui
        </span>
      </div>
      <div className="grid-item small">
        <img
          loading="lazy"
          src="https://plus.unsplash.com/premium_photo-1675700427405-f4cf90589055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjl8fHxlbnwwfHx8fHw%3D"
          alt="JRS New Image"
        />
      </div>
    </div>
  );
};

export default BentoGrid;
