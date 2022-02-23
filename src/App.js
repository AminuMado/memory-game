import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import data from "./components/Utils/data";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters: data };
  }

  render() {
    return (
      <>
        <Header />
        <Main characters={this.state.characters} />
        <Footer />
      </>
    );
  }
}
export default App;
