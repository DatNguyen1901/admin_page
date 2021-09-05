import React from 'react';
import {Form,FormGroup,Label,Input,Button,Alert} from 'reactstrap';
import {Cookies} from 'react-cookie';
import './Style.css';

export default class FormInputUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user_name:'',
            pass:'',
            name:'',
            sex:'MALE',
            phone_number:'',
            address:'',
            error:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeSex = this.handleChangeSex.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleChangeName(e){
        this.setState({
            ...this.state,
            name:e.target.value
        })
    }
    handleChangePassword(e){
        this.setState({
            ...this.state,
            pass:e.target.value
        })
    }
    handleChangeUserName(e){
        this.setState({
            ...this.state,
            user_name:e.target.value
        })
    }
    handleChangeAddress(e){
        this.setState({
            ...this.state,
            address:e.target.value
        })
    }
    handleChangeSex(e){
        this.setState({
            ...this.state,
            sex:e.target.value
        })
    }
    handleChangePhoneNumber(e){
        this.setState({
            ...this.state,
            phone_number:e.target.value
        })
    }
    handleReset(){
        this.setState(() => ({
            user_name:'',
            pass:'',
            name:'',
            sex:'MALE',
            phone_number:'',
            address:'',
        }));
    }
    async handleSubmit(e){
        e.preventDefault();
    }
    render() {
        return (
            <>
                {this.state.error && <Alert color="warning">{this.state.error}</Alert>}
                <Form className="login-form" onSubmit={this.handleSubmit}>

                    {
                        this.props.type === 'register' &&
                        <FormGroup className="input-box">
                            <Label for="name">Họ và tên</Label>
                            <Input value={this.state.name} onChange={this.handleChangeName} autoFocus name="email" id="name" placeholder="Họ và tên" />
                        </FormGroup>
                    }
                    <FormGroup className="input-box">
                        <Label for="user_name">Tài khoản đăng nhập</Label>
                        <Input value={this.state.user_name} onChange={this.handleChangeUserName} autoFocus name="email" id="user_name" placeholder="Tài khoản đăng nhập" />
                    </FormGroup>

                    {this.props.type === "register" &&
                        <>
                            <FormGroup className="input-box">
                                <Label for="exampleSelectMulti">Giới tính</Label>
                                <Input value={this.state.sex} onChange={this.handleChangeSex} type="select" name="select" id="exampleSelectMulti">
                                    <option value="MALE">Nam</option>
                                    <option value="FEMALE">Nữ</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className="input-box">
                                <Label for="address">Địa chỉ</Label>
                                <Input value={this.state.address} onChange={this.handleChangeAddress} autoFocus name="email" id="address" placeholder="Địa chỉ" />
                            </FormGroup>
                            <FormGroup className="input-box">
                                <Label for="phone_number">Số điện thoại</Label>
                                <Input value={this.state.phone_number} onChange={this.handleChangePhoneNumber} autoFocus name="phone" id="phone_number" placeholder="Số điện thoại" />
                            </FormGroup>
                        </>
                    }
                    <FormGroup className="input-box">
                        <Label for="password">Mật khẩu</Label>
                        <Input value={this.state.pass} onChange={this.handleChangePassword} type="password" name="password" id="password" placeholder="Mật khẩu" />
                    </FormGroup>

                    <Button className="btn-box" color="primary">{this.props.type === 'register' ? 'Đăng ký' : 'Đăng nhập'}</Button>
                </Form>
            </>
        );
    }
    
}