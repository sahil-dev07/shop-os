import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="gap-1 w-full bg-white sm:px-[50px] md:px-[80px] lg:px-[150px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
