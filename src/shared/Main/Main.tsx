import React, {useState, useEffect} from 'react';
import styles from './main.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";

export function Main(socket:any) {

    const [userType, setUserType] = useState('');
    const token = useSelector<RootState, string>(state => state.token)

    useEffect(() => {
        console.log(token)
        if (!token) {
            setUserType('anonymous')
        } else {
            setUserType('User')
        }
    }, [token]);

  return (
      <div className={styles.main}>
          <h1>Main Page</h1> <br/>
          <p><label>User Type:</label> {userType}</p>
      </div>
  );
}
