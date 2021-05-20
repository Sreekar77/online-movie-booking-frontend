import './App.css';
import Welcome from './Component/Welcome';
import Routes from './Component/Routes';
import ErrorBoundary from './Component/ErrorBoundary';




function App() {
  return (
    <div>
   
    <ErrorBoundary>
    <Routes>

        {<Welcome/>}

        </Routes>

        </ErrorBoundary>
      
        
</div>

  
  );
}

export default App;