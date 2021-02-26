import React, {Component} from 'react'

class FollowButton extends Component {
    constructor(props) {
        super(props);
        this.state = {isDisabled: false, text: "Follow"};
    }

    handleClick = () => {
        this.setState(state => ({
            isDisabled: true,
            text: "Following!"
        }));
    };

    render() {
        return (
            <button
                onClick={this.handleClick} disabled={this.state.isDisabled}
                className={'follow-btn'}>{this.state.text}
            </button>
        )
    }
}

export default FollowButton
