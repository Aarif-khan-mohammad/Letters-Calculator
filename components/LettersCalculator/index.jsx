import {Component} from 'react';
import './index.css';

class LettersCal extends Component {
  state = {count : 0}

  onChangeInput = (event)=>{
    this.setState({count : event.target.value.length})
  }
  
  render(){
    const {count} = this.state
    return(
      <div className="main-page">
        <div className='left-container'>
          <h1 className='heading'>Calculate the letters you Enter</h1>
          <label htmlFor='inputEl' className='labelEl' >Enter the Phrase</label>
          <br/>
          <input type='text' id="inputEl" onChange={this.onChangeInput} placeholder='Enter The Phrase'/>

          <p className='count-para'>No. Of Letters : {count}</p>
        </div>
        <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" className='cal-image'/>
        
      </div>
    );
  }
}

export default LettersCal;