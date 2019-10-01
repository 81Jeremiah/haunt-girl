// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchStates } from '../../actions/postActions';
// import Form from 'react-bootstrap/Form';
// class States extends Component {
//
//   componentDidMount(){
//     this.props.fetchStates()
//   }
//
//   render(){
//     console.log(this.props.states)
//     const statesList = this.props.states.map(state => {
//         return(
//           <option key={state.id} value={state.id}>{state.abbreviation}</option>
//         );
//     });
//
//     return(
//
//         {statesList}
//
//
//     );
//   }
//
// }
//
//
//
//
//
// const mapStateToProps = state => {
//   return {states: state.states.states}
//
// }

// export default connect(mapStateToProps, {fetchStates})(States)
