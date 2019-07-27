import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
    // Renders the entire app on the DOM

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

     render() {

      return (
          <>

          <div className="App">

          <div>
        <h1>Movie List</h1>
        <hr></hr>
          {this.props.storeInstance.movies.map(item =>{
              return (
                  <div key={item.id}>
                    <p>{item.title}<br />{item.description}</p>

                    <img onClick={(event) => this.props.history.push('/details')} src={item.poster} />
            </div>
              )
          })} 
          </div>
        </div>
          </>
          
      );
        }}
                
            
    
const putStoreInstanceOnProps = (storeInstance) => ({
    storeInstance
})

export default connect(putStoreInstanceOnProps)(List);