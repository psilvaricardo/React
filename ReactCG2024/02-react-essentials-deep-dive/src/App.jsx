import Examples from './components/Examples';
import CoreConcepts from './components/CoreConcepts';
import CustomHeader from './components/Header/CustomHeader';

const App = () => {
  return (
    <>
      <CustomHeader />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
