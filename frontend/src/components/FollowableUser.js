import React, {Component} from 'react'
import FollowButton from "./FollowButton"

const jsonData = [
  {
        "username": "Jonathan123"
  },
  {
        "username": "Ahmad123"
  },
  {
        "username": "Oliver123"
  },
  {
        "username": "Daniel123"
  },
  {
        "username": "Anusha123"
  },
  {
        "username": "tom123"
  },
  {
        "username": "helloWorld"
  },
  {
        "username": "USeeMe123"
  },
  {
        "username": "Ninho"
  },
  {
        "username": "Maes"
  },
  {
        "username": "Drake"
  },
  {
        "username": "Complex"
  },
  {
        "username": "O.H"
  },
  {
        "username": "CNN"
  },
  {
        "username": "MTV"
  },
  {
        "username": "LeoTheCat"
  },
  {
        "username": "TVA"
  },
  {
        "username": "HappinessIsFalse"
  },
  {
        "username": "FakeNews"
  },
  {
        "username": "IcyVibes"
  },
  {
        "username": "4:20pm"
  },
  {
        "username": "LeoTheDog"
  },
  {
        "username": "444"
  },
  {
        "username": "DOGOTHEGOD"
  },
  {
        "username": "SSENSE"
  },
  {
        "username": "HoltRenfrew"
  },
  {
        "username": "SnakeBoy666"
  },
  {
        "username": "GeorgeLePigeon"
  },
  {
        "username": "J.H."
  },
  {
        "username": "Hassan555"
  },
  {
        "username": "Magalie22"
  }
]

class FollowableUser extends Component {
    constructor(props) {
        super(props);
        this.state = {data: jsonData};
    }

    render() {
        return (
            <div className={'user-grid'}>
                {
                    this.state.data.map((dynamicData, i) =>
                    <div className={'user-block'}>
                        <div className={'user-block-content'}>
                            <p>{dynamicData.username}<br/></p>
                            <FollowButton/>
                        </div>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default FollowableUser
