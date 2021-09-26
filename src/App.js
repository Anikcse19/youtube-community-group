import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {

  const [youtubers, setYoutubers] = useState([])

  // loading Json data 
  useEffect(() => {
    fetch('./fakeData.JSON')
      .then(res => res.json())
      .then(data => setYoutubers(data))
  }, [])
  const [hire, setHire] = useState([])

  // handeling Button 
  const handleHire = (member) => {
    const newHire = [...hire, member]
    setHire(newHire)
  }
  return (
    <div className='bg'>
      {/* render Header components */}
      <Header></Header>

      {/* render MainBody components By mapping json data  */}
      <div className='row'>
        <div className="col-md-8 ms-3 hv me-3 col">
          <div className="row">
            {
              youtubers.map(youtuber => <MainBody handleHire={handleHire} key={youtuber.id} youtuber={youtuber}></MainBody>)
            }
          </div>
        </div>
        {/* render Cart component  */}
        <div className="col-md-3 col">
          <Cart singleMember={hire}></Cart>
        </div>
      </div>


    </div>
  );
}

export default App;
