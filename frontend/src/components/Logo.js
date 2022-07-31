import {Box, Grid, Typography} from "@mui/material"

const mainBoxSx = (color) => ({
    color: "white" ?? color,
    width: "150px",

})

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


export default function Logo(color) {
    return (
        <Box sx={mainBoxSx(color)}>
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