import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () =>{
        if (this.props.Permisson === 1) {
            return "Admin";
        }
        if (this.props.Permisson === 2) {
            return "Moderator";
        }
        return "Normal User";
    }

    editClick = () =>{
        this.props.editFunClick();
        this.props.changerEditUserStatus();
    }

    deleteButtonClick = (idUser) =>{
        this.props.deleteButtonClick(idUser)
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.username}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <button onClick={() => this.editClick()} type="button" className="btn btn-primary">sua</button>
                    <button onClick={(idUser) => this.deleteButtonClick(this.props.id)} type="button" className="btn btn-danger">xoa</button>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;