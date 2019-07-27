import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    backButton = (event) => {

        
        this.props.history.push('/')
    }
    editMovie = (event) => {

        this.props.history.push('/Edit')
    } 

    render() {
        return (
            <>
              <h1>Movie Details</h1>
                <button onClick={this.backButton} type="submit">Back to List</button>
                <button onClick={this.editMovie} type="submit">Edit</button>
        
      </>

        )
    }

}// end component

const putStoreInstanceOnProps = (storeInstance) => ({
    storeInstance
})


export default connect(putStoreInstanceOnProps)(Details);