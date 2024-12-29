import FileUpload from './FileUpload';
import LeftArrow from '../../../assets/icons/leftArrow.svg';
type Props = {};

const CreateStore = ({}: Props) => {
  return (
    <div className="flex flex-col gap-3 p-6">
      <div className="flex gap-5 items-center">
        <img
          src={LeftArrow}
          className="hover:bg-slate-200 p-3 rounded-lg"
          alt="Left Arrow"
          onClick={() => history.back()}
        />
        <h2 className="text-3xl font-semibold">Create a new store</h2>
      </div>
      <div className="flex justify-center flex-col items-center p-5">
        <div className="w-[919px]">
          <div className="p-2 flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Store Name</h2>
              <input
                className="border border-[#E5E5E5] h-5 p-5 w-full rounded-full"
                type="text"
                placeholder="Enter your store"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Store Description</h2>
              <textarea
                className="border border-[#E5E5E5] h-[165px] p-5 w-full rounded"
                placeholder="Describe your store"
              />
            </div>

            <div className="w-full">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStore;
