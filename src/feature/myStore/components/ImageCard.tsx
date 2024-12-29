import { ImageCardData } from '..';

const ImageCard = ({ title, image }: ImageCardData) => {
  return (
    <>
      <img
        src={image}
        className="rounded-md"
        alt="img"
        width="200px"
        height="195px"
      />
      <p className="text-[#808080] mt-2">{title}</p>
    </>
  );
};

export default ImageCard;
