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
        let details = this.props.storeInstance.details;
        return (
            
            <>
              <h1>Movie Details</h1>
                <button onClick={this.backButton} type="submit">Back to List</button>
                <button onClick={this.editMovie} type="submit">Edit</button>
                <div>
                    <p>Details Page</p>
                    <p>{details.title}</p>
                    <p>{details.description}</p>
                    <p>{details.name}</p>
                </div>
        
      </>

        )
    }

}// end component

const putStoreInstanceOnProps = (storeInstance) => ({
    storeInstance
})

export default connect(putStoreInstanceOnProps)(Details);