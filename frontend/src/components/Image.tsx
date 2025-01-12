interface ImageProps {
  imageSource: string;
  altText: string;
}

export const Image = ({ imageSource, altText }: ImageProps) => {
  return (
    <div className="flex justify-center">
      <img
        src={imageSource}
        alt={altText}
        className="rounded w-[90%] mt-4 sm:w-1/2 sm:ml-8 sm:self-center mb-8"
      />
    </div>
  );
};
