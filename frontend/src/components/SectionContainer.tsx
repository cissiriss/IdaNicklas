export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="flex justify-center items-center p-4 mb-8">
      <div className="flex flex-col justify-center p-4 sm:w-2/3">
        {children}
      </div>
    </section>
  );
};
