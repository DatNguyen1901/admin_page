import React from 'react';
import Header from './Header/index';
import Content from './Content/index';
import Footer from './Footer/index';

export default class Layout extends React.Component {

    render() {
        return (
            <>
                <Header />
                <Content />
                <Footer />
            </>
        )
    }
}