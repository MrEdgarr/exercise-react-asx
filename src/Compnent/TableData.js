import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtonClick = (idUser) =>{
        this.props.deleteUser(idUser);
    }
    mappingDataUser = () => {
        return (
            this.props.dataUserProps.map((value, key) => (
                // console.log(value.name),
                <TableDataRow
                deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
                changerEditUserStatus={() => this.props.changerEditUserStatus()}
                    editFunClick={() => this.props.edit(value)}
                    key={key}
                    username={value.name}
                    stt={key}
                    tel={value.phone}
                    Permisson={value.Permisson}
                    id={value.id}
                />
            ))
        )

    }

    render() {
        // console.log(this.props.dataUserProps);
        return (
            <div className="col-8">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>TEN</th>
                            <th>SDT</th>
                            <th>QUYEN</th>
                            <th>THAO TAC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;