import { FormCard } from "../components/FormCard";
import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { Buttons } from "../components/Buttons";

export const RegisterContainer = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        name: "",
    });
    const onSubmit = () => {
        console.log("HOLA QUE TAL");
    };
    const onChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value,
        })
    }
    return (
        <>
            <Logo/>
            <FormCard onSubmit={onSubmit}>
                <Input
                    onChange={onChange}
                    name={"name"}
                    placeholder={"Name"}
                    value={state.name}
                />
                <Input
                    onChange={onChange}
                    name={"email"}
                    placeholder={"Email"}
                    value={state.email}
                    type={"email"}
                />
                <Input
                    onChange={onChange}
                    name={"password"}
                    placeholder={"Password"}
                    value={state.password}
                    type={"password"}
                />
                <Button type="submit">Login</Button>
            </FormCard>
            <Buttons login={false}/>
        </>
    );
};
