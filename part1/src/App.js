import './App.css';
import Message from './Message';

const Description = () => {
  return <p>App from FullStack Cource</p>
}

function App() {
  const message = 'Timestamp:';
  // const a = 2
  // const b = 3
  
  return (
    <div className="App">
      <Message message="We're working in React Course" color="grey"/>
      <Description />
      {message+new Date() /*Timestamp*/}
    </div>
  );
}

export default App;
