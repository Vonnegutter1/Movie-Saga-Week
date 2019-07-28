import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
        id: this.props.storeInstance.details.id,
        name: '',
        description: '',
    }

    cancelButton = (event) => {
        this.props.history.push('/Details')
    }
    saveButton = (event) => {

        this.props.history.push('/Details')

        this.props.dispatch({type: 'EDIT_MOVIE', payload: this.state})
    } 

handleChangeFor = (propertyName, event) => {

    this.setState({
        ...this.state,
        [propertyName]: event.target.value,
    })
}

   handleSubmit = () => {
       this.props.dispatch({type: 'UPDATE_DETAILS', payload: this.state})
       this.props.history.push('/details')
   }


    render() {

        return (
            
            <>
            <h1>Edit Page</h1>
                <button onClick={this.cancelButton} type="submit">Cancel</button>
                <button onClick={this.saveButton} type="submit">Save</button>


                <input placeholder="Movie Title" value={this.state.name} onChange={ (event) => this.handleChangeFor('name', event)}
                type="text" />
                <input placeholder="Movie Description" value={this.state.description} onChange={(event) => this.handleChangeFor('description', event)}
                type="text"  />
                
    
            </>

        )
        }

}// end component

const putStoreInstanceOnProps = (storeInstance) => ({
    storeInstance
})

export default connect(putStoreInstanceOnProps)(Edit);