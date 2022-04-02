import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj:{},
        }
    }

    getUserEditInfo = (info) =>{
        this.setState({
            userObj:info
        })
        this.props.getUserEditInfoApp(info);
    }
    isShowEditForm = () => {
        if (this.props.editUserStatus === true) {
            return <EditUser
            getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            userEditObject = {this.props.userEditObject}
            changerEditUserStatus={()=> this.props.changerEditUserStatus()}/>;
            
        }
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });

        this.props.ConnectProps(this.state.tempValue)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="form-group">
                        <div className="btn-group">
                            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="nhap..." />
                            <div onClick={(dl) => this.props.ConnectProps(this.state.tempValue)} className="btn btn-info">Tim</div>
                        </div>
                    </div>


                    {/* //Connection Component */}
                    <div className='btn btn-block btn-outline-danger' onClick={() => this.props.ketnoi()}>Dong</div>
                </div>

                {this.isShowEditForm()}
            </div>
        );
    }
}

export default Search;