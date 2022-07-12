import React, { Component } from "react";
import DishDetail from "./components/DishDetailComponent.js";
import { DISHES } from "./shared/dishes.js";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <DishDetail dishes={this.state.dishes} />
      </div>
    );
  }
}
<Menu />;

export default App;
