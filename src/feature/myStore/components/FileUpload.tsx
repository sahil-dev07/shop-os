import React, { useState, useRef } from 'react';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
interface FileUploadProps {
  onFileSelect?: (files: FileList | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle drag events
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files) {
      setSelectedFiles(files);
      if (onFileSelect) onFileSelect(files);
    }
  };
  const openGoogleDrive = () => {
    window.open('https://drive.google.com', '_blank');
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(files);
      if (onFileSelect) onFileSelect(files);
    }
  };

  const handleUpload = () => {
    if (selectedFiles) {
      // Handle file upload logic here (e.g., send files to a server)
      console.log('Uploading files:', selectedFiles);
    }
  };
  console.log('selectedFiles', selectedFiles);
  return (
    <div className=" rounded-xl mx-auto">
      <div
        className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center bg-gray-50 cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <DriveFolderUploadIcon fontSize="large" />
        <div className="ml-4 text-center">
          <p className="text-xl font-semibold text-gray-700">Upload Sources</p>
          <p className="text-sm text-gray-500">
            Drag and drop or choose file to upload
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {selectedFiles && selectedFiles.length > 0 && (
        <div className="file-preview mt-4">
          <h3 className="text-sm font-semibold text-gray-700">
            Selected Files:
          </h3>
          <ul className="list-none mt-2 space-y-1">
            {Array.from(selectedFiles).map((file, index) => (
              <li key={index} className="text-gray-600 text-sm">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-col mt-5 w-full gap-4 sm:flex-row ">
        <button
          className="flex items-center justify-center gap-1 text-black border border-[#E5E5E5] p-3 rounded-xl h-[70px] sm:w-1/3 w-full"
          onClick={openGoogleDrive}
        >
          <AddToDriveIcon />
          Google Drive
        </button>
        <button className="flex items-center justify-center gap-1 text-black border border-[#E5E5E5] p-3 rounded-xl sm:w-1/3 w-full">
          <AddLinkIcon />
          Links
        </button>
        <button className="flex items-center justify-center gap-1 text-black border border-[#E5E5E5] p-3 rounded-xl sm:w-1/3 w-full">
          <ContentPasteIcon />
          <p>Paste text</p>
        </button>
      </div>
      <button
        onClick={handleUpload}
        className="w-full bg-[#0F172A] text-white py-3 rounded-xl mt-4"
      >
        Upload Files
      </button>
    </div>
  );
};

export default FileUpload;
