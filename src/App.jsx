import "./App.css";
import { BrowserRouter } from "react-router-dom";
import SportNav from "./components/navigation/navigation";
import Header from "./components/header/header";
import Category from "./components/category/category";
import NewsDashboard from "./components/newsDashboard/newsDashboard";
import Football from "./components/football/football";
import SportsDashboard from "./components/news-and-rancing/news-and-rancing";
import SportsArticle from "./components/sports-article/sports-article";
import Newsletter from "./components/subscribe/subscribe";

function App() {
  return (
    <BrowserRouter>
      <SportNav />
      <Header />
      <Category />
      <NewsDashboard />
      <Football />
      <SportsDashboard />
      <SportsArticle />
      <Newsletter />
    </BrowserRouter>
  );
}

export default App;
