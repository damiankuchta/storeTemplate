import React, {useState} from "react"
import {Button, FormControl, Input} from "@mui/material";

const formSx = {
    display: "inline-flex",
    flexDirection: "row",
    width: "100%",
    boxSizing: "unset",
    border: "2px solid transparent",
    outline: "1px solid transparent",
    paddingLeft: "60px",
    "@media (max-width:1024px)": {
        paddingLeft: "0",
        paddingTop: "40px"
    }
}

const formOutline = {
    outline: "1px solid white",
    border: "2px solid black",
    borderRadius: 1,
}

const emialInputSx = {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    color: 'black',
    paddingLeft: 5,
}

const submitButtonSx = {
    backgroundColor: "orange",
    color: "white",
    borderRadius: 0,
    textTransform: "none",
    width: 125,
    '&:hover': {
        backgroundColor: "orange"
    }
}

export default function SignupFom({}) {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }


    return (
        <FormControl sx={{...formSx, ...isFocused && formOutline}} onFocus={handleFocus} onBlur={handleBlur}>
            <Input required placeholder={"Your e-mail"} sx={emialInputSx} disableUnderline/>
            <Button variant={'contained'} sx={submitButtonSx} disableElevation>Subscribe</Button>
        </FormControl>
    )
}