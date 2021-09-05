import React from 'react';
import './index.css';
import {Link} from "react-router-dom"   
import { Button} from 'reactstrap';
import {Cookies} from 'react-cookie';

const cookies = new Cookies();


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isLogin:!!cookies.get('userInfo'),
        };
    }
    handleLogout = () => {

        this.setState({
            isLogin:false,
        });
         window.location.reload();

        this.props.history.push('/login');
    }
    render() {
        const{isLogin} = this.state;

        return (
            <main>
            <div className="header">
                <a href="#" className="logo">BLOG</a>
                {isLogin ?(
                    <div className="header-right">
                    <Button onClick={this.handleLogout}>
                        Logout
                    </Button>
                    </div>
                ):(
                <div className="header-right">
                    <Button>
                    <Link to="/login">Login</Link>
                    </Button>
                    <Button>
                    <Link to="/register">Register</Link>
                    </Button>
                </div>
                )}
            </div>
          </main>
        )
    }
}

export default Header;