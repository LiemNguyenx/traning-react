import { ADD_USER } from '../constants/action-type';

export function addUser(payload) {
    return { type: ADD_USER, payload };
}