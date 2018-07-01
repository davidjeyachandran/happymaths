class App extends Component {
  constructor() {
    super()
    this.state = {data: []}
  }

  componentWillMount() {
    const raceDataFile = ''
    this.loadFile(raceDataFile);
  }

  loadFile(endpoint) {
    fetch(endpont, {
      method: 'get'
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({data:data})
    }.bind(this))
    .catch((err) => console.log(err))
  }

  loadFile(endpoint) {
    fetch(endpoint, {method: 'get'})
    .then((response) => response.json())
    .then((data) => {this.setState({data:data})}.bind(this))
    .catch((err) => console.log(err))
  }


  render() {

  }
}