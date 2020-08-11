import React from 'react';
import ThemeButton from './ThemeButton';
import '../styles/CreateSet/CreateSetItemList.scss'

class CreateSetItemList extends React.Component{

    renderList(){

    }

    

    render(){
        return <div className="CreateSetItemList container brightblue">
            {this.renderList()}
            <AddItem />
            <ThemeButton text="만들기" />
        </div>
    }
}

const AddItem = () => {
    return <div className="AddItem">
        <p className="AddItem-text">+ 카드 추가하기</p>
        <div className="AddItem-line"></div>
    </div>
}

export default CreateSetItemList;