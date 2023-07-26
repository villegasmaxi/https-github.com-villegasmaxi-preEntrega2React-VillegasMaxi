import Buttons from "../Buttons";
import Cartwidget from "../CartWidget";
import Brand from "../Brand";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./index.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="container">
        <div className="contentBar mt-3">
         
          <div>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" as={NavLink} to='/category/comida' >Comida</Button>
              <Button variant="secondary" as={NavLink} to='/category/postre'>Postre</Button>
              <Button variant="secondary" as={NavLink} to='/category/cafe'>Café</Button>
              <Button variant="secondary" as={NavLink} to='/'>Todos</Button>
            </ButtonGroup>
          </div>

          <NavLink to="/" className="brand">
            <Brand />
          </NavLink>

          <div className="buttons">
            <Buttons
              valor="Cálculo a la romana"
              font="sans-serif"
              handleClick={() => alert("Proximamente estará en servicio")}
            />

            <Buttons
              valor="Calculo equitativo"
              handleClick={() => alert("proximamente calculadora de gastos")}
            />
          </div>

          <Cartwidget valor="0" />
        </div>
      </div>
    </>
  );
}
export default NavBar;
