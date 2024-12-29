import { useNavigate } from 'react-router-dom';

const BaseHome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full items-center w-full justify-center">
      <h1 className="font-inter text-[32px] font-semibold leading-[38.73px] tracking-[-0.01em] text-left">
        How can I assist you today?
      </h1>

      <div className="h-[50px] mt-5 flex gap-5 justify-around items-center border bg-[#ffffff] border-[#E5E5E5] rounded-[40px] sm:opacity-100 px-5">
        <img src="/circle.svg" className="pr-0" alt="circle icon" />
        <input
          className="border-none outline-none bg-transparent p-0 w-[400px]"
          placeholder="What are we selling today?"
        />
        <img src="/upload.svg" alt="upload icon" />
      </div>

      <div className="flex gap-5 mt-4">
        <button
          className="flex items-center border shadow-md text-sm font-normal border-[#E5E5E5] py-2 px-3 rounded-[20px] hover:bg-[#f0f9ff] focus:outline-none"
          onClick={() => navigate('/create-store')}
        >
          <img src="/Fileupload.png" alt="File upload" />
          Upload
        </button>

        <button
          className="flex items-center border shadow-md text-sm border-[#E5E5E5] font-normal py-2 px-3 rounded-[20px] hover:bg-[#f0f9ff] focus:outline-none"
          onClick={() => navigate('/agents')}
        >
          <img src="/Robot.png" alt="Agents" />
          Agents
        </button>

        <button
          className="flex items-center border shadow-md text-sm font-normal border-[#E5E5E5] py-2 px-3 rounded-[20px] hover:bg-[#f0f9ff] focus:outline-none"
          onClick={() => navigate('/templates')}
        >
          <img src="/image1.png" alt="Templates" />
          Templates
        </button>
      </div>
    </div>
  );
};

export default BaseHome;
