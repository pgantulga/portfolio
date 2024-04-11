// Import npm packages
import { Routes, Route } from 'react-router-dom';

// Import pages 
import Layout from './components/layout/Layout'
import Home from './pages/Home';

import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
     
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;