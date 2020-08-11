import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import ImageIcon from '@material-ui/icons/Image';

const CreateSetItem =() => {

    const n = 1

    return <div className="CreateSetItem">
        <div className="CreateSetItem-nav">
            <p className="CreateSetItem-number">{n}</p>
            <div className="CreateSetItem-tools">

            </div>
            <div className="CreateSetItem-side-tools">
                <OpenWithIcon />
                <DeleteOutlineIcon />
            </div>
        </div>
        <div className="CreateSetItem-panel">
            <div className="CreateSetItem-input">
                
            </div>
            <ImageIcon className="CreateSetItem-image-icon" />
        </div>
    </div>
}

export default CreateSetItem;