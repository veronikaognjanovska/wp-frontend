import React from 'react';
import {Link} from "react-router-dom";
import './modal.css';


const ModalLongFile =  ({ handleClose, show, dataList, type }) => {

    const showHideClassName = show ? 'my-modal d-block' : 'my-modal d-none';
    const pageLink = (type==='Followers' || type==='Following') ? "/users/" : "/movies/";


    return (
        <div className={showHideClassName} tabIndex="-1" role="dialog" >
            <div className="modal-dialog" role="document">
                <div className={"modal-content"}>
                    <div className={"modal-header"}>
                        <h5 className={"modal-title"} id="exampleModalLongTitle">{type}</h5>
                        <button type={"button"} className={"close"} onClick={handleClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={"modal-body"}>
                        <ul className={'list-group overflow'}>
                            {dataList.map((item) => {
                                return (
                                    <li key={item.id} className={'list-group-item list-group-item-action text-center'}>
                                        <Link className={""}
                                              to={`${pageLink}${item.id}`} onClick={handleClose}>
                                            {item.text}
                                            {console.log(item)}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={"modal-footer"}>
                        <button type={"button"} className={"btn btn-secondary"} data-dismiss="modal"
                                onClick={handleClose} >Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ModalLongFile;



