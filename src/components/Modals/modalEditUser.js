import React from 'react';
import './modal.css';

const ModalEditUser = ({handleClose, onEdit, show, data}) => {

    const showHideClassName = show ? 'my-modal d-block' : 'my-modal d-none';

    const [formData, updateFormData] = React.useState({
        email: '',
        birthday: ''
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const email = formData.email !== "" ? formData.email : data.email;
        const birthday = formData.birthday !== "" ? formData.birthday : data.birthday;

        onEdit(data.username, email, birthday)
    }

    return (
        <div className={showHideClassName} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className={"modal-content"}>
                    <form onSubmit={onFormSubmit}>
                        <div className={"modal-header"}>
                            <h5 className={"modal-title"} id="exampleModalLongTitle">Edit User</h5>
                            <button type={"button"} className={"close"} onClick={handleClose} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className={"modal-body"}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                       className="form-control"
                                       id="username"
                                       name="username"
                                       placeholder={data?.username}
                                       disabled
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text"
                                       className="form-control"
                                       id="email"
                                       name="email"
                                       defaultValue={data?.email}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="birthday">Birthday</label>
                                <input type="date"
                                       className="form-control"
                                       id="birthday"
                                       name="birthday"
                                       defaultValue={data?.birthday}
                                       onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={"modal-footer"}>
                            <button id="submit" type="submit" className={"btn btn-primary float-right"}
                                    onClick={handleClose}>Submit
                            </button>
                            <button type={"button"} className={"btn btn-secondary"} data-dismiss="modal"
                                    onClick={handleClose}>Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default ModalEditUser;



