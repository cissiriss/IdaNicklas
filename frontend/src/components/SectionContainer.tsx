export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="flex flex-col sm:justify-center mb-8">
      {children}
    </section>
  );
};
