import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const CheckAuthProvider = (props) => {
	const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('userData')){
            navigate(`/login`);
        }
    }, [])

    return (
        <>{props.children}</>
    )	
}

export default CheckAuthProvider;
