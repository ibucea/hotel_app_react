// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootStateOrAny } from '../redux/store'


export const useAuthStatus = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    const userInfo  = useSelector((state: RootStateOrAny) => state.userLogin);

    useEffect(() => {
        if (userInfo) {
        setLoggedIn(true)
        } else {
        setLoggedIn(false)
        }
        setCheckingStatus(false)
    }, [userInfo])

    return { loggedIn, checkingStatus }

}


// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
