import './index.css';
import Welcome from './Welcome.jsx';
import GameCard from './GameCard.jsx';


const App = () => {
  return (
  
      <>
        
        <h1>Whack A Mole</h1>

        <section className = 'countdown'> {/* Working out the 15 second countdown */ }
          {setInterval(() => {
            (console.log('15 seconds passed'));
          }, 15000)}

        </section>
          <main>
            <Welcome />
            <GameCard />
          </main>
            
            
      </>
  );
}

  export default App;