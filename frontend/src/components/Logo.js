import {Box, Grid, Typography} from "@mui/material"


const circleSx = {
    width: 30,
    height: 30,
    backgroundColor: "orange",
    borderRadius: "50%",
    marginLeft: "3px"

}

const smallText = {
    textTransform: "uppercase",
    letterSpacing: "5px"
}


export default function Logo({color, sx}) {

    const mainBoxSx = {
        color: color ?? "white",
        width: "150px",
        display: "flex",
        flexDirection: "column",
        ...sx
    }


    return (
        <Box sx={mainBoxSx}>
            <Grid justifyContent={'center'} alignItems={'center'} container>
                <Grid item>
                    <Typography variant={'h3'}>
                        Logo
                    </Typography>
                </Grid>
                <Grid item>
                    <Box sx={circleSx}/>
                </Grid>
            </Grid>
            <Grid justifyContent={'center'} alignItems={'center'} container>
                <Typography sx={smallText}>
                    furniture
                </Typography>
            </Grid>


        </Box>
    )
}