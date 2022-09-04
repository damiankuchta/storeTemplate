import React, {useState} from "react"
import Box from "@mui/material/Box";
import {Input, Typography} from "@mui/material";
import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";


export default function QuantityPicker({quantity, setQuantity, allowZero = false}) {

    const [isSelected, setIsSelected] = useState(false);

    const qualityPickerSx = {
        display: "flex",
        backgroundColor: "#f5f7fa",
        alignItems: "center",
        justifyContent: "space-between",
        width: "150px",
        "& > *": {
            padding: "2px 10px",
        }
    }

    const textHolderSx = {
        display: "flex",
        alignItems: "center",
        color: "#959595",
        fontWeight: "bolder",
    }

    const inputBoxSx = {

        display: "flex",
        width: "100px",
        "& > input": {
            cursor: "text",
        },
        border: isSelected ? "black 2px solid" : "#f5f7fa 2px solid",
        borderRadius: "5px",

    }

    const arrowHolderSx = {
        display: "flex",
        flexDirection: "column",

        "& > svg": {
            color: "#959595",
            cursor: "pointer",
            margin: 0,
            padding: 0,
            height: "15px",
            transform: "scale(2)"
        },

    }


    const changeQuantity = (quantity) => {
        setQuantity(old => {
            const total = old + quantity
            if (!allowZero) {
                return (total > 1 ? total : 1)
            }
            return (total > 0 ? total : 0)

        })
    }

    const typeInQuantity = (event) => {
        setQuantity(() => {
            const value = event.target.value
            if (!allowZero) {
                return (value > 1 ? value : 1)
            }
            return (value > 0 ? value : 0)
        })
    }


    return (
        <Box component={'span'} sx={qualityPickerSx}>
            <Typography sx={textHolderSx}>Qty: </Typography>

            <Box sx={inputBoxSx} onFocus={() => setIsSelected(true)} onBlur={() => setIsSelected(false)}>
                <Input type={'number'} onChange={typeInQuantity} value={quantity} disableUnderline/>
                <Box sx={arrowHolderSx}>
                    <ArrowDropUp onClick={() => changeQuantity(1)}/>
                    <ArrowDropDown onClick={() => changeQuantity(-1)}/>
                </Box>

            </Box>
        </Box>
    )
}