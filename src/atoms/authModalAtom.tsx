import { atom } from "recoil";


export interface authModalType {
    open: boolean;
    view?:'login'|'signup' |'resetpassword'
}

const initialState: authModalType = {
    open: false,
    view: 'login'
}

export const AuthModalState = atom<authModalType>({
    key: 'authModalState',
    default: initialState
})

