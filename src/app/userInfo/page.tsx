'use client';

import React, { useActionState } from "react";
import { greeting } from "./greeting";

const initialState = {
    firstName: '',
    lastName: '',
    error: ''
}
const userInfo = () => {

    const [state, formAction] = useActionState(greeting, initialState)
    return (

        <div className="m-2">
            <form action={formAction}>
                <input className="border border-green-400 p-1 rounded-lg mr-1" type="text" name="firstname" />
                <input className="border border-green-400 p-1 rounded-lg" type="text" name="lastname" /> <br />
                <button className="bg-green-400 w-[350px] mt-3 p-1 rounded-lg">submit</button>


                {(state.firstName || state.lastName) && (
                    <p>{state.firstName} {state.lastName}</p>
                )}
                {
                    state.error && (
                        <p>{state.error}</p>
                    )
                }
            </form>
        </div>
    );
};

export default userInfo;
