import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setUserInfo(JSON.stringify(user, null, 2));
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    })

    return (
        isAuthenticated && (
            <div>

                <img src={user.picture} alt={user.name} />

                <h2>{user.name || <Skeleton duration={1} height={30} width={300} />}</h2>

                <p>{user.email}</p>

                <JSONPretty data={userInfo} />

                {/* <JSONPretty data={user} /> */}
                {/* {JSON.stringify(user, null, 2)} */}

            </div>
        )
    )
}

export default Profile;