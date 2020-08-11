import React from "react";
import CreateSetHeader from './CreateSetHeader';
import '../styles/CreateSet/CreateSet.scss';
import CreateSetBanner from "./CreateSetBanner";
import CreateSetItemList from "./CreateSetItemList";

class CreateSet extends React.Component{
    render(){
        return(
            <div className="CreateSet">
                <CreateSetHeader />
                <CreateSetBanner />
                <CreateSetItemList />
            </div>
        );
    }
}

export default CreateSet;