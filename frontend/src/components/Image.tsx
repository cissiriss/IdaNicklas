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
        className="rounded w-[80%] mt-4 sm:w-2/3 sm:ml-8 sm:self-center"
      />
    </div>
  );
};
