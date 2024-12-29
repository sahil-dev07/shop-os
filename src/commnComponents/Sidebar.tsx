import React from 'react';
import StoreIcon from '@mui/icons-material/Store';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useNavigate } from 'react-router-dom';

const sideBarItems = [
  {
    icon: <AddHomeIcon />,
    navigateTo: '/',
  },
  {
    icon: <StoreIcon />,
    navigateTo: '/my-store',
  },
  {
    icon: <AccountTreeIcon />,
    navigateTo: '/work-flows',
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bg-gray-100 h-full flex items-center flex-col w-[80px] border-r-[1px]">
      <img
        src="/Union.png"
        alt="Dashboard"
        className="mt-4 rounded block text-left w-11 h-11"
        onClick={() => navigate('/')}
      />
      <ul className="space-y-4 mt-80">
        {sideBarItems.map((items, index) => (
          <li
            key={index}
            className="hover:cursor-pointer hover:bg-slate-200 p-3 rounded-lg"
            onClick={() => {
              navigate(items.navigateTo);
            }}
          >
            {items.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
