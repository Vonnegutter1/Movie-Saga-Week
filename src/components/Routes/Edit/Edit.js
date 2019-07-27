import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    cancelButton = (event) => {
        this.props.history.push('/Details')
    }
    saveButton = (event) => {

        this.props.history.push('/Details')
    } 

    render() {


        return (
            <>
            <h1>Edit Page</h1>
                <button onClick={this.cancelButton} type="submit">Cancel</button>
                <button onClick={this.saveButton} type="submit">Save</button>
           
    
            </>

        )
        }

}// end component

const putStoreInstanceOnProps = (storeInstance) => ({
    storeInstance
})

export default connect(putStoreInstanceOnProps)(Edit);