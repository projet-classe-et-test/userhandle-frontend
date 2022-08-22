import { Route, Routes } from 'react-router-dom';
import AddWord from './AddWord';


const Words = () => {
  return (
    <>
      <Routes>
          <Route path="/add" element={<AddWord />} />
          {/* <Route path="/:userId/word" element={<EditWord />} /> */}
          {/* <Route path="/:userId/word" element={<ViewWord />} /> */}
          {/* <Route path="/" element={<WordsList />} /> */}
          
      </Routes>
    </>
  );
};

export default Words;
