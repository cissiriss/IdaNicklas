export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="flex justify-center items-center mb-8">
      <div className="flex flex-col justify-center sm:w-1/2">{children}</div>
    </section>
  );
};
