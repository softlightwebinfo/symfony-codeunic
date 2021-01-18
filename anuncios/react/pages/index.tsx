import React, { Component } from "react";
import { connect } from "react-redux";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Hola</div>
    }
}

export default connect(state => state)(Index);