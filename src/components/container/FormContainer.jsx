import React, { Component } from "react";
import Input from '../presentational/Input.jsx';

class FormContainer extends Component {
    constructor() {
        super();

        this.state = {
            title: "test"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.id]: event.target.value });
        console.log(this.state)
    }

    render() {
        const { seo_title } = this.state;
        return (
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <p>Create a new article</p>
                    <div id="create-article-form">
                        <form id="main-form">
                            <Input
                                type="text"
                                label="seo_title"
                                id="seo_title"
                                value={seo_title}
                                text="testinput"
                                handleChange={this.handleChange}
                            />
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default FormContainer;