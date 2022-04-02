import './../App.css';
import AddData from './AddData';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';

//uuid Creact New ID
import { v4 as uuidv4, validate } from 'uuid';

import React, { Component } from 'react';

import dt from './Data.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conn: true,
      DataUser: [],
      // searchText: ''
      editUserStatus: false,
      userEditObject: {},
    }
  }

  
  componentWillMount() {
    //kiem tra localStorage
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(dt))
    } else{
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        DataUser:temp
      })
    }
  }
  

  deleteUser =  (idUser) =>{
    // console.log(idUser);
    var tempData = this.state.DataUser;
    tempData = tempData.filter(item => item.id !== idUser);
    this.setState({
      DataUser:tempData
    })
    
    localStorage.setItem("userData", JSON.stringify(tempData))
  }

  getUserEditInfoApp = (info) => {
    this.state.DataUser.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.Permisson = info.Permisson;
      }
    })
    localStorage.setItem("userData",JSON.stringify(this.state.DataUser))
  }

  changerEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }

  getNewUserData = (name, phone, Permisson) => {
    var item = {};
    //uuid Creact New ID
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.Permisson = Permisson;

    var items = this.state.DataUser;
    items.push(item);

    this.setState({
      DataUser: items
    })
    // console.log("ket noi ok");
    // console.log(name);
    // console.log(phone);
    // console.log(Permisson);
    // console.log(items);

    localStorage.setItem("userData", JSON.stringify(items))
  }

  //Lay du lieu thong qua tham so truyen vao tu tabledata
  editUser = (user) => {
    this.setState({
      userEditObject: user
    })
  }


  //SEARCH
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }

  //Connection Component 
  tb = () => {
    this.setState({
      conn: !this.state.conn
    })
  }

  render() {
    // console.log(this.state.DataUser);
 
    // localStorage.setItem("userData",JSON.stringify(dt));

    //SEARCH
    var ketqua = [];
    this.state.DataUser.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    })
    // console.log(ketqua);


    return (
      <div>
        <Header></Header>
        <Search
          getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
          ConnectProps={(dl) => this.getTextSearch(dl)}
          ketnoi={() => this.tb()}
          editUserStatus={this.state.editUserStatus}
          changerEditUserStatus={() => this.changerEditUserStatus()}
          userEditObject={this.state.userEditObject}
        ></Search>

        <div className="container">
          <div className="row">
            <TableData
            deleteUser = {(idUser) => this.deleteUser(idUser)}
            edit={(user) => this.editUser(user)} dataUserProps={ketqua}
              changerEditUserStatus={() => this.changerEditUserStatus()}
            ></TableData>
            <AddData add={(name, phone, Permisson) => this.getNewUserData(name, phone, Permisson)} conn={this.state.conn}></AddData>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
