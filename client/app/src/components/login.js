import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class Login extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

//Value passed is properties from the form
//NOT this.props
    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // We navigate by calling this.context.router.push with the
                // new path to navigate to.
                this.context.router.push('/');
            });
    }

    render() {
        // Same thing as handleSubmit = this.props.handleSubmit
        // => name = this.props.fields.name
        const { fields: {name, email, password}, handleSubmit } = this.props; 

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new post</h3>

                <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
                    <label>Name</label>
                    <input type="text" className="form-control" {...name} />
                    <div className="text-help">
                        {name.touched ? name.error : ''}
                    </div>
                </div>

                <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
                    <label>Email</label>
                    <input type="text" className="form-control" {...email} />
                    <div className="text-help">
                        {email.touched ? email.error : ''}
                    </div>
                </div>

                <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
                    <label>Password</label>
                    <input type="password" className="form-control" {...password} />
                    <div className="text-help">
                        {password.touched ? password.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.name){
        errors.name = 'Enter a name';
    }
    if(!values.email) {
        errors.email = 'Enter an email';
    }
    if(!values.password) {
        errors.password = 'Enter a password';
    }

    return errors;
}

// Connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['name', 'email','content'],
    validate
},null, { createPost })(Login);