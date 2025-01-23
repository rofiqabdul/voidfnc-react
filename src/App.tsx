import "./App.css";
// import Counter from "./components/Counter";
// import ProfileCard from "./components/ProfileCard";
import { Routes, Route } from "react-router";
import TermPage from "./pages/TermPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";

// type OnePieceChar = {
//   name: string;
//   job: string;
//   year: number;
//   id: number;
// };

// const characters: OnePieceChar[] = [
//   {
//     job: "Captain",
//     name: "Luffy",
//     year: 2000,
//     id: 1,
//   },
//   {
//     job: "Chef",
//     name: "Sanji",
//     year: 2000,
//     id: 2,
//   },
//   {
//     job: "Swordman",
//     name: "Zoro",
//     year: 2000,
//     id: 3,
//   },
// ];

function App() {
  return (
    <>
      {/* <Counter /> */}
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/term" element={<TermPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
