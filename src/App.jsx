import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Student from './components/Student/Student';
import Subject from './components/Rest/Subject';
import Profile from './components/Rest/Profile';
import NotFound from './NotFound/NotFound';
import Navbar from './components/Rest/Navbar';

import Footer from './components/Footer/Footer';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/student" element={<Student />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
