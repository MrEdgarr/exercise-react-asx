import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phone: this.props.userEditObject.phone,
            Permisson: this.props.userEditObject.Permisson,

        }
    }
    
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.Permisson = this.state.Permisson;

        this.props.getUserEditInfo(info);
        this.props.changerEditUserStatus();
    }
    render() {
        return (
            <form>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <input defaultValue={this.props.userEditObject.name} onChange={(event) => this.isChange(event)} name="name" type="text" className="form-control" placeholder="TEN" />
                    </li>
                    <li className="list-group-item">
                        <input defaultValue={this.props.userEditObject.phone} onChange={(event) => this.isChange(event)} name="phone" type="text" className="form-control" placeholder="SDT" />
                    </li>
                    <li className="list-group-item">
                        <select defaultValue={this.props.userEditObject.Permisson} onChange={(event) => this.isChange(event)} name="Permisson" className="form-control" required >
                            <option value>open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </li>
                    <li className="list-group-item">
                        <input type="button" onClick={() => this.saveButton()} className="btn btn-danger btn-block" value="Edt" />
                    </li>
                </ul>
            </form>
        );
    }
}

export default EditUser;