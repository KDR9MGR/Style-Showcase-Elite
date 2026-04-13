const MarqueeBanner = () => {
  const items = [
    "HAUTE COUTURE",
    "✦",
    "PRÊT-À-PORTER",
    "✦",
    "ACCESSORIES",
    "✦",
    "BESPOKE",
    "✦",
    "RUNWAY",
    "✦",
  ];

  return (
    <div className="bg-secondary py-4 overflow-hidden border-y border-border">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-lg md:text-xl tracking-[0.2em] text-muted-foreground mx-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
