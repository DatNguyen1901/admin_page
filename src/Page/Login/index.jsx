import React from "react"
import { Link, withRouter } from 'react-router-dom';
import FormInputUser from "../Component/FormInputUser";
import './login.css';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    onLoginSuccess(){
        this.props.history.push('/list_post');
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-form">
                    <h2 className="title">Đăng nhập</h2>
                    <FormInputUser type="login" onLoginSuccess={this.onLoginSuccess} />
                    <p>hoặc <Link to="/register">Đăng ký</Link></p>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);