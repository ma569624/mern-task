
import React, { useState } from 'react'
import PageRoute from './Route/PageRoute';
import EmailContext from './components/context/Context';

function App() {
  const [data, setData] = useState(null);
  // console.warn(data)
  return (
    <EmailContext.Provider value={{data, setData}}>
      <PageRoute />
    </EmailContext.Provider>
  );
}

export default App;
