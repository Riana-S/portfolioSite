import "./techCarousel.css";

interface TechCarouselProps {
  logos: { name: string; logo: string }[];
}

export default function TechCarousel({ logos }: TechCarouselProps) {
  return (
    <div className="tech-carousel">
      <div className="carousel-track">
        {/* Duplicate the logos to create a seamless loop */}
        {[...logos, ...logos, ...logos, ...logos].map((tech, index) => (
          <div className="tech-item" key={index}>
            <img src={tech.logo} alt={tech.name} title={tech.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
