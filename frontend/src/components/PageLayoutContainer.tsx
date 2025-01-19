export const PageLayoutContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="flex flex-col w-full sm:text-center sm:justify-center font-alumni font-light text-xl">
      {children}
    </main>
  );
};
