type Props = { src: string; alt: string };

export function EraBanner({ src, alt }: Props) {
  return (
    <div className="mb-4 w-full aspect-[16/9] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}
