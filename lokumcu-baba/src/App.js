import './App.css';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import CreateFormExampleCaptureValues from '../src/pages/CreateFranchisePreApplication.jsx';


function App() {
  return (
    <div className="App">
      <Container className="main" textAlign="left" >
        <CreateFormExampleCaptureValues></CreateFormExampleCaptureValues>
      </Container>
    </div>
  );
}

export default App;
