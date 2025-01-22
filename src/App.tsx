import "./App.css";
import Counter from "./components/Counter";
import ProfileCard from "./components/ProfileCard";

type OnePieceChar = {
  name: string;
  job: string;
  year: number;
  id: number;
};

const characters: OnePieceChar[] = [
  {
    job: "Captain",
    name: "Luffy",
    year: 2000,
    id: 1,
  },
  {
    job: "Chef",
    name: "Sanji",
    year: 2000,
    id: 2,
  },
  {
    job: "Swordman",
    name: "Zoro",
    year: 2000,
    id: 3,
  },
];

function App() {
  return (
    <>
      <Counter />
      {/* <div style={{ gap: "8px", display: "flex", flexDirection: "row" }}>
        {characters.map((character) => (
          <ProfileCard
            name={character.name}
            year={character.year}
            job={character.job}
            key={character.id}
          />
        ))}
      </div> */}
    </>
  );
}

export default App;
