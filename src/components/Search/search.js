import React from "react";
import {Link} from "react-router-dom";
import {StorageService} from "../../service/StorageService";
import {faUser, faFilm} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Search = (props) => {

    const listSearch = StorageService.getSearchResults();

    console.log(listSearch)
    return (
        <div className={"row"}>
            <div className="col-md-6 m-auto pt-5">
                <div className="list-group-flush">
                    <ul className={'list-group overflow'}>
                        {listSearch.map((item, index) => {
                            let faIcon = faUser;
                            if (item.type === 'movie') {
                                console.log(index)
                                faIcon = faFilm;
                            }
                            console.log(faIcon)
                            return (
                                <div className="list-group-item">
                                    <FontAwesomeIcon icon={faIcon} className={'mr-5'}/>
                                    <Link className={""}
                                          to={`${item.type}s/${item.id}`}>
                                        {item.type} - {item.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );


}

export default Search;