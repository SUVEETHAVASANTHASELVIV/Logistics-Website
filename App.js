import './App.css';
import { AuthProvider } from './components/Context/AuthContext';
import Routing from './components/Routing/Routing';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/Context/UserContext';


function App() {
  return (
    <div>
      <UserProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </AuthProvider>
      </UserProvider>
    </div>
  );
}

export default App;
