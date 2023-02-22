import React from "react"
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    Person : { fullName:"Mzoughi Mahdi", 
    bio:"Ingénieur informatique fraîchement diplômé d’ESPRIT. Je suis actuellement à la recherche d'une opportunité pour fonder ma carrière. J'ai suivi divers stageset formations durant mon cursus universitaire. Je suis une personne responsable, polyvalente et motivée.", 
    imgSrc:"./workathomeagent.jpg",
     profession:"Développeur web full stack     "},
    show : true,
    count: 0

  };
}
  render(){
    const count = this.state.count

   return (
    <div className="App">
      {
        this.state.show?
      <div>
        <h1>{this.state.Person.fullName}</h1>
        <h1>{this.state.Person.bio}</h1>
        <div><img src={this.state.Person.imgSrc} alt={"Mahdi"}style={{width:1000}}></img></div>
        <h1>{this.state.Person.profession}</h1>
        <h1>Current Count : {count}</h1>

      </div>
      :null
      }
      <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>Hide/Show</button>
    </div>)
  }
  componentDidMount() {
    this.myInterval = setInterval (()=>{
      this.setState(prevState => ({
        count: prevState.count + 1
    }))
  }, 1000)
  }


  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

}


export default App;