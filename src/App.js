import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CoolStuff from './components/cool_stuff/CoolStuff';
import DevWork from './components/dev_work/DevWork';
import Theater from './components/theater/Theater';

export default function App() {
  return (
    <div className='min-h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Theater />} />
          <Route path='/dev' element={<DevWork />} />
          <Route path='/stuff' element={<CoolStuff />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  );
}
