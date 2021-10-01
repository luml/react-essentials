import React from 'react';
import './App.css';

function SecretComponent() {
  return <h1>Secret information for authorized userd only</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this components</h1>
}

// Object destructuring
function App({authorized}) {
  return (
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

export default App;
