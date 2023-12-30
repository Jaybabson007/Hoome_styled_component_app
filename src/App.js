import Designs from "./components/designs/Designs";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./GlobalStyle";


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Navbar/>
      <Hero/> 
      <Designs/>
    </div>
  );
}

export default App;
