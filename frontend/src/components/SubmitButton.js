import React from 'react'

class SubmitButton extends React.Component {

    render() {
        return(
            <div className="submit-button">
                <button
                    className='btn'
                    type={this.props.type}
                    disabled={this.props.disabled}>
                    {this.props.text}
                </button>
            </div>
        )
    }
}

export default SubmitButton;