import { useState } from 'react';
export const Gifitems = ({ title, url }) => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p
        className={`title ${isTitleHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsTitleHovered(true)}
        onMouseLeave={() => setIsTitleHovered(false)}
      >
        {title}
      </p>
    </div>
  );
};
