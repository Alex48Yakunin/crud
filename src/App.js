import './App.css';
import AddForm from './components/AddForm';
import NotesList from './components/NotesList';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
    };

    this.dataURL = "http://localhost:7777/notes";
  }

  componentDidMount() {
    this.getData();
  }

  handleRemove = (id) => {
    axios.delete(`${this.dataURL}/${id}`).then(() => this.getData());
  };

  getData = () => {
    axios
      .get(this.dataURL)
      .then((response) => this.setState({ notes: response.data }));
  };

  handleAdd = (note) => {
    axios.post(this.dataURL, note).then(() => this.getData());
  };

  render(){
    return (
      <div className="App">
        <NotesList notes={this.state.notes} handleRemove={this.handleRemove} />
        <AddForm handleAdd={this.handleAdd}  />
      </div>
    )
  }

}

export default App;
