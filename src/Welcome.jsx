import ScoreCard from './ScoreCard.jsx';

const Welcome = () => {

  return (
    <section>
      <p>Welcome to Whack A Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>

      <button>Play</button> {/* On click load the game card in this section */}

      <ScoreCard />

    </section>

  )

}

  export default Welcome;