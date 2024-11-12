export default function SectionTitle({
  title,
  subtitle,
}: Readonly<{ title: string; subtitle?: string }>) {
  return (
    <div>
      <h1 className="text-4xl font-semibold leading-normal text-left text-black dark:text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="text-black dark:text-white lg:text-lg text-md">
          {subtitle}
        </p>
      )}
    </div>
  );
}
