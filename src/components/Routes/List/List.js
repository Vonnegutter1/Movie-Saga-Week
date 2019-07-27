import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
    // Renders the entire app on the DOM

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    // nextPage = (event) => {

    //     // this.props.dispatch({ type: 'UPDATE_FEELING', payload: this.state.newFeeling })

    //     // this.props.history.push('/Understanding')
    // }

    // handleChangeFor = (propsName, event) => {
    //     this.setState({
    //         newFeeling: {

    //             [propsName]: event.target.value
    //         }
    //     })
    // }

     render() {

      return (
          <>
          <section>
                {JSON.stringify(this.props.storeInstance.movies)};
            
                
          </section>
          </>
      )
            }
        }
// end component
const putStoreInstanceOnProps = (storeInstance) => ({
    storeInstance
})

export default connect(putStoreInstanceOnProps)(List);