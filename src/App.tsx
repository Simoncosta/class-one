import { Component } from "react";

// ###########################
// Entendendo Props e Components
const Team = (props: any) => {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <About name={props.name} office={props.office} age={props.age} />
      <Social facebook={props.facebook} instagram={props.instagram} />
      <hr />
    </div>
  );
}

const About = (props: any) => {
  return (
    <div>
      <h2>Olá sou o(a) {props.name}</h2>
      <h3>Cargo: {props.office}</h3>
      <h3>Idade: {props.age} anos</h3>
    </div>
  );
}

const Social = (props: any) => {
  return (
    <div>
      <a href={props.facebook}>Link da minha empresa: Facebook </a> <br />
      <a href={props.instagram}>Link da minha empresa: Instagram </a>
    </div>
  );
}

const BemVindo = (props: any) => {
  return (
    <>
      <h1>Seja Bem Vindo...</h1>
      <h2>Nenhum Team Encontrado</h2>
    </>
  );
}

// ###########################
// Aplicando Class Component
class Teams extends Component {
  render() {
    return (
      <div>
        <h2>Olá sou o(a) {this.props.name}</h2>
        <h3>Cargo: {this.props.office}</h3>
        <h3>Idade: {this.props.age} anos</h3>
        <Social facebook={this.props.facebook} instagram={this.props.instagram} />
        <hr />
      </div>
    );
  }
}

class Socials extends Component {
  render() {
    return (
      <div>
        <a href={this.props.facebook}>Link da minha empresa: Facebook </a>
        <a href={this.props.instagram}>Link da minha empresa: Instagram </a>
      </div>
    );
  }
}

function App() {

  const teams: any = [{
    name: "Simon",
    office: "Developer",
    age: "26",
    facebook: "https://www.facebook.com/itrocketpt",
    instagram: "https://www.instagram.com/itrocketpt/",
  }];

  // const teams: any = [];

  return (
    <div>
      {
        teams.length === 0 ?
        (
          <BemVindo />
        ):
        (
          teams.map((result: any) => {
            return(
              <Team
                name={result.name}
                office={result.office}
                age={result.age}
                facebook={result.facebook}
                instagram={result.instagram}
              />
            );
          })
        )
      }
    </div>
  );
}

export default App;