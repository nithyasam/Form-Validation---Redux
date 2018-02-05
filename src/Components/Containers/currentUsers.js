import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentUsers extends Component {
    render(){
        return(
            <div>
                <h3> Current Users </h3>
                <ol>
                    {this.props.user.all.map((user, i) => {
                        return <li key={i}>{user.username}</li>
                    })}
                </ol>
            </div>
        )
    }

}
const stateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(stateToProps)(CurrentUsers)

