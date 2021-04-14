import React from "react";
import {Avatar} from "@material-ui/core";
import '../App.css';



class ReportsAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({newReport: ""})
        this.dismissReport = this.dismissReport.bind(this);
    };

    render() {
        return (
            <div className="report-card">

                <img className="report-image" src={this.props.image} alt=""/>

                <div className='report-content'>
                    <div className="report-header">
                    </div>


                    <div id='reports-report-container'>
                        {this.props.reports.map((reports) => {
                            return (
                                <Report id={reports.id} report={reports.content} username={reports.username}
                                        />
                            )
                        })}
                    </div>

                </div>
            </div>
        )
    }
}

function Report({report, username,}) {

    return (
        <div className='report-box'>
            <Avatar
                className="report-avatar"
                alt={username}
                src=""
            />
            <div className='mr-auto'>
                <p className='report-box-username'>{username}</p>
                <p className='report-box-text'>Content: {report}</p>
            </div>
        </div>
    )
}

export default ReportsAdmin;
