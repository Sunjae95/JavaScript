import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';


export default function(SpecificComponent, option, adminRoute = null ) {
    //null => 아무나 출입가능
    //true => 로그인한 유저만 출입가능
    //false => 로그인한 유저는 출입불가능

    function AuthenticationCheck(props) {

        const dispatch = useDispatch(); 

        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response);
                if(!response.payload.isAuth) {      //로그인하지않은상태
                    if(option) {
                        props.history.push('/login');
                    }
                } else {    //로그인한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/');
                    } else {
                        if(option === false) 
                            props.history.push('/'); 
                    }
                }
            });
        }, []);

        return ( <SpecificComponent />);
    }
    return AuthenticationCheck;
}