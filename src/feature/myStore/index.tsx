import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import img1 from '../../assets/images/tshirt.jpeg';
import ImageCard from './components/ImageCard';
import { useNavigate } from 'react-router-dom';
import LeftArrow from '../../assets/icons/leftArrow.svg';

export type ImageCardData = {
  image: string;
  title: string;
};
type Props = {};

export default function index({}: Props) {
  const navigate = useNavigate();

  const imageCardData: ImageCardData[] = [
    {
      image: img1,
      title: 'Product 1',
    },
    {
      image: img1,
      title: 'Product 2',
    },
    {
      image: img1,
      title: 'Product 3',
    },
  ];
  return (
    <div className="flex flex-col gap-3 p-6">
      <div className="flex gap-5 items-center">
        <img
          src={LeftArrow}
          className="hover:bg-slate-200 p-3 rounded-lg"
          alt="Left Arrow"
          onClick={() => history.back()}
        />
        <h2 className="text-3xl font-semibold">My Store</h2>
      </div>

      <div className="bg-[#f6f5f4] my-5 rounded-lg p-6 max-w-[675px]">
        <h1 className="text-2xl font-semibold">Generate Store</h1>
        <div className="mt-2 text-lg font-medium text text-[#808080]">
          <p>
            Generatives stores are AI built shopping destinations for your
            users. They adapt, personalize and present information real time.
            It's simply a better way to shop.
          </p>
          <br />
          <p>
            Start by adding everything in your mind about the brand and what you
            are seeling
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-3xl">Examples</h1>
        <div className="flex gap-6 flex-wrap py-3 px-2">
          {imageCardData.map((card) => (
            <div className="flex flex-col">
              <ImageCard title={card.title} image={card.image} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <button
          className="bg-black text-white px-5 py-2 rounded-full flex justify-center items-center gap-2"
          onClick={() => {
            navigate('/create-store');
          }}
        >
          <AddCircleOutlineIcon />
          Create Store
        </button>
      </div>
    </div>
  );
}
