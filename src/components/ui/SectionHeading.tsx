interface Props {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: Props) {
  return (
    <>
      <p className="text-sm uppercase tracking-[0.3em] text-[#b68944]">
        {label}
      </p>

      <h2 className="mt-4 font-serif text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg text-[#6d5550]">
          {description}
        </p>
      )}
    </>
  );
}