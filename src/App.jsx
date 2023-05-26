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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/index" element={<Home />} />
        <Route exact path="/index.html" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/subject" element={<Subject />} />
        <Route exact path="/student" element={<Student />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
