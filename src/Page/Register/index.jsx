import React from "react";
import { withRouter } from 'react-router-dom';
import FormInputUser from '../Component/FormInputUser';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.handleRegisterSuccess = this.handleRegisterSuccess.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleRegisterSuccess(data) {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-form">
                    <h2 className="title">Đăng ký</h2>
                    <FormInputUser type="register" onRegisterSuccess={this.handleRegisterSuccess} />
                </div>
            </div>
        );
    }
}

export default withRouter(Register);