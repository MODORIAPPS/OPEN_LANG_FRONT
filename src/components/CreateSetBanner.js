import React from 'react';
import '../styles/CreateSet/CreateSetBanner.scss'

const CreateSetBanner = () => {
    return <div className="CreateSetBanner">
        <div className="CreateSetBanner-background">
            <div className="CreateSetBanner-background-item container white">
                
            </div>
            <div className="CreateSetBanner-background-item container brightblue">

            </div>
        </div>
        <div className="CreateSetBanner-banner">
            <div className="CreateSetBanner-bannerImage"></div>
            <div className="CreateSetBanner-text">
                <p>도표를 추가하고 이름 붙이기</p>
                <p>이미지를 드래그하거나 파일 업로드.</p>
            </div>

        </div>
    </div>
}

export default CreateSetBanner;