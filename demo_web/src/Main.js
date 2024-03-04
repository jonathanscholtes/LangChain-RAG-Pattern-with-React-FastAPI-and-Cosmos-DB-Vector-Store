import {React, Component } from 'react'
import Search from './Search/Search'
import './Main.css'

class App extends Component {
  constructor() {
    super()
    this.state = { question: '', searchResults: [] }
  }

  render() {
    return (
      <div className="Main">
        <div className="Main-Header">
          <img src="/logoresearch.png" alt="LangChain RAG with React Demo Logo" height={'95%'} />
        </div>
        <div className="Main-Body">
          <div className="Main-Content">
            <Search />
          </div>
        </div>
        <div className="Main-Footer">
          <b>Disclaimer: Sample Application</b>
          <br />
          Please note that this sample application is provided for demonstration
          purposes only and should not be used in production environments
          without proper validation and testing.
        </div>
      </div>
    )
  }
}

export default App
