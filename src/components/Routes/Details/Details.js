import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    // state = {
    //     newFeeling: {
    //         feeling: ''
    //     }
    // }

    // nextPage = (event) => {

    //     this.props.dispatch({ type: 'UPDATE_FEELING', payload: this.state.newFeeling })
    //     this.props.history.push('/Understanding')
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
        {/* //         <section className="feeling">
        //             <h1>How are you Feeling today?</h1>

        //             <form >
        //                 <input type="number" placeholder="Feeling" onChange={(event) => this.handleChangeFor('feeling', event)} />
        //                 <button onClick={this.nextPage} type="submit">Next</button>
        //             </form> */}

        {/* //         </section> */}
        //     </>

        )
    }

}// end component

const putStoreInstanceOnProps = (storeInstance) => ({
    storeInstance
})


export default connect(putStoreInstanceOnProps)(Details);