import React from 'react';
import firas from './code.png'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  state = {
    person: {
      fullName: 'firas haj',
      bio: 'love coding',
      imgSrc: firas,
      profession: 'ui/ux designer',
    },
    show: false,
    count: 0,
  }
  HandleShow = () => {
    this.setState({
      show: !this.state.show,
    })
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);

  }

  render() {
    return (
      <div>
        <h1> Hello</h1>
        {this.state.show && (
          <>
            <h2>fullname : {this.state.person.fullName}</h2>
            <h2>bio : {this.state.person.bio}</h2>
            <img className='img' src={this.state.person.imgSrc} />
            <h2>profession:{this.state.person.profession}</h2>
            <h2>{this.state.count}</h2>
          </>
        )
        }

        <button  class="btn btn-outline-success" onClick={this.HandleShow} >Show</button>
        



      </div>
    )
  }
}
export default App;