import React, { Component } from 'react'

class AddContact extends Component {

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    static defaultProps = {
        name: 'Monika Rangta',
        email: 'monika@gmail.com',
        phone: '9876543210'
    }


    onSubmit = (e) => {
        e.preventDefault();

        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }

        console.log(contact);

    }
    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="name" >Name</label>
                            <input name="name" className="form-control form-control-lg" type="text" placeholder="Enter your name" defaultValue={name} ref={this.nameInput} ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" >Email</label>
                            <input name="email" className="form-control form-control-lg" type="email" placeholder="Enter your email" defaultValue={email} ref={this.emailInput} ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" >Phone</label>
                            <input name="phone" className="form-control form-control-lg" type="number" placeholder="Enter your phone" defaultValue={phone} ref={this.phoneInput} ></input>
                        </div>
                        <input type="submit" className="btn-danger btn-block" value="Add Contacts" />
                    </form>
                </div>


            </div>
        )
    }
}

export default AddContact;