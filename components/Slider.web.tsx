import useEmblaCarousel from "embla-carousel-react";
import React from "react";

type Item = {
  id?: string | number;
  title: string;
  image: string;
  onPress?: () => void;
};

export default function CollectionSlider({
  data,
  itemWidth = 300,
  gap = 16,
}: {
  data: Item[];
  itemWidth?: number;
  gap?: number;
}) {
  const [emblaRef] = useEmblaCarousel({ loop: false, draggable: true });

  return (
    <div
      ref={emblaRef}
      style={{
        overflow: "hidden",
        padding: `${gap}px`,
        cursor: "grab",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: `${gap}px`,
        }}
      >
        {data.map((item, i) => (
          <a
            key={item.id ?? i}
            href="#"
            style={{
              flex: "0 0 auto",
              width: itemWidth,
              scrollSnapAlign: "start",
              textDecoration: "none",
              color: "inherit",
            }}
            onClick={(e) => {
              e.preventDefault();
              item.onPress?.();
            }}
          >
            <div
              style={{ borderRadius: 8, overflow: "hidden", marginBottom: 8 }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: Math.round((itemWidth * 2) / 3),
                  objectFit: "cover",
                  display: "block",
                }}
                draggable={false}
              />
            </div>
            <div style={{ color: "#fff", fontSize: 14, lineHeight: 1.2 }}>
              {item.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
