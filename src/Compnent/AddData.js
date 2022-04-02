import React, { Component } from 'react';


class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowNotification: false,
            id: "",
            name: "",
            phone: "",
            Permisson: ""
        }
    }

    Notification = (props) => {
        //Connection Component
        // if (this.props.conn) {


        //Kiểm tra giá trị của props
        if (props.isShow) {

            //Trả về JSX để hiển thị
            return (
                <form>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <input onChange={(event) => this.isChange(event)} name="name" type="text" className="form-control" placeholder="TEN" />
                        </li>
                        <li className="list-group-item">
                            <input onChange={(event) => this.isChange(event)} name="phone" type="text" className="form-control" placeholder="SDT" />
                        </li>
                        <li className="list-group-item">
                            <select onChange={(event) => this.isChange(event)} name="Permisson" className="form-control" required >
                                <option value>open this select menu</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </li>
                        <li className="list-group-item">
                            <input type="reset" onClick={() => this.props.add(this.state.name, this.state.phone, this.state.Permisson)} className="btn btn-primary btn-block" value="Them moi" />
                        </li>
                    </ul>
                </form>
            )
        } else {
            //Trả về null để ẩn
            return null;
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);

        this.setState({
            [name]: value
        });

        //pakage to items
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.phone = this.state.phone;
        // item.Permisson = this.state.Permisson;

        // console.log("wefdw" + item);
    }

    render() {
        // console.log(this.state);
        const { isShowNotification } = this.state
        // console.log(this.props.conn);
        return (
            <div className="col-4">
            
                <div className="card">
                    <div onClick={() => {
                        //Cập nhật lại state
                        this.setState({
                            isShowNotification: !isShowNotification
                        })
                    }} className='btn btn-block btn-outline-info'>{isShowNotification ? 'An' : 'Them'}</div>

                    {/* <div className='btn btn-block btn-outline-danger'>Dong</div> */}

                    {/* Gọi function Notification */}
                    <this.Notification isShow={isShowNotification} />

                </div>

                
            </div>


        );


        //Connection Component
        // return (

        //     <div className="col-4">
        //         <div className="card">
        //             <div onClick={() => this.props.conn} className='btn btn-block btn-outline-info'>{this.props.conn ? 'An' : 'Them'}</div>
        //             {/* <div className='btn btn-block btn-outline-danger'>Dong</div> */}

        //             {/* Gọi component Notification */}
        //             <this.Notification isShow={isShowNotification} />

        //         </div>
        //     </div>
        // );
    }
}

export default AddData;