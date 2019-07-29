import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
    // Renders the entire app on the DOM

    // This is the 'ready' function that will render to the page    
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }
    

    // The handleDetails function will run a dispatch by targeting the images ID. 
    // This will target items in the DB in order to bring wanted data over to the details page
    handleDetails = (item) => {
        console.log('Check for details', item.id)
        this.props.dispatch({type: 'FETCH_DETAILS', payload: item.id})

        this.props.history.push('/details')

    }

     render() {

      return (
          <>
          <div class="grid">

          <div class="wrapper">
              
                
              
        <h1>Movie List</h1>
        <hr></hr>
          {this.props.storeInstance.movies.map(item =>{
              return (
                  <div key={item.id}>
                    <p>{item.title}<br />{item.description}</p>

                    <img onClick={(event) => this.handleDetails(item)} src={item.poster} alt="" />
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