import React, {Component} from 'react';


class FeaturedFrom extends Component {
  state = {
    title: "",
    content: ""
  }
  handleChange = event =>{
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  render(){
    return(
      <form>
        <h1>Featured on main page</h1>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}/>
        <label>Content></label>
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}/>
        <button
         type="submit"
        >
        submit
        </button>
      </form>
    )
  }
}

export default FeaturedFrom
