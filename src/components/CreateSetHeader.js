import React from 'react';
import ThemeButton from './ThemeButton';
import TextField from '@material-ui/core/TextField';
import '../styles/CreateSet/CreateSetHeader.scss'

const CreateSetHeader = () => {

    return <div className="CreateSetHeader container white">
        <div className="CreateSetHeader-wrapper">
            <div className="CreateSetHeader-top">
                <div className="CreateSetHeader-vertical">
                    <p className="text title">새로운 학습 세트 생성하기</p>
                    <p className="text info">1분전에 변경사항 저장됨.</p>
                </div>
                <ThemeButton text="작성하기" />

            </div>

            <TextField className="inputfield" placeholder="제목을 입력해주세요. 예: 생물학, 진화론 등등.." />
            <TextField className="inputfield" placeholder="설명을 추가해주세요." />

            <div className="CreateSetHeader-bottom">
                <p className="text small highlight" id="add-from-other-source">+ Word, Excel, Google Docs 등으로부터 불러오기</p>
                <div className="CreateSetHeader-right">
                    <div className="CreateSetHeader-item">
                        <p className="text small">모든 유저가 볼 수 있음.</p>
                        <p className="text small highlight">변경하기</p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
}

export default CreateSetHeader;