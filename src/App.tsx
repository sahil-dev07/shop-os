import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './commnComponents/Layout';
import BaseHome from './feature/home';
import MyStore from './feature/myStore/index';
import WorkFlows from './feature/workflows/index';
import AgentList from './feature/home/components/Agents';
import Templates from './feature/home/components/Templates';
import CreateStore from './feature/myStore/components/CreateStore';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BaseHome />} />
          <Route path="/my-store" element={<MyStore />} />
          <Route path="/work-flows" element={<WorkFlows />} />
          <Route path="/agents" element={<AgentList />} />
          <Route path="/create-store" element={<CreateStore />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
