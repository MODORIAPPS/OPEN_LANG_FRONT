import React from 'react';
import {connect} from 'react-redux';
import {googleSigned, googleSignOut} from '../../actions/index'
import OpenLangApi from '../../apis/openlang';
import Avatar from "@material-ui/core/Avatar";
import ThemeButton from '../ThemeButton';

class Auth extends React.Component{

    googleSignIn() {
        console.log('googleSignIn');

        const currentLocation = window.location.pathname;
        console.log(currentLocation);
        window.location.href = `http://localhost:8006/auth/google/signin?loc=${currentLocation}`
    }

    googleSignOut = () => {
        OpenLangApi.get('/auth/google/signout').then((result) => {
            console.log(result);
            this.props.googleSignOut();
            // useHistory().push("/");
          }).catch((error) => {
            console.log(error);
          });
    }

    facebookSignIn = () => {
        // facebook api request
    }

    renderAuthBtn(){

        // TODO: 컴포넌트 로딩중일 때는 프로그레스바 표시 
        
        if(this.props.auth.isSigned){
            // 로그인 된 경우
            return <Avatar className="Auth-userAvatar" alt="google-profile" src={this.props.auth.userImage} />

        }else{
            // 로그인 X
            // TODO: 다양한 로그인 옵션 선택 using React-Portal
            return <ThemeButton onClick={() => this.googleSignIn()} text="로그인" />
        }
    }

    render() {
        return (
            <div className="Auth">
                {this.renderAuthBtn()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps,{
    googleSigned, googleSignOut
})(Auth);