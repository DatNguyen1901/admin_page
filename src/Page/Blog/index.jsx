import React from "react"
import { Route, Switch } from "react-router";
import Layout from "../../Layout";



class Blog extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Layout} />
            </Switch>
        )
    }
}
export default Blog;