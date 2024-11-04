import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyledToBar = styled(Toolbar)(() => ({
        display:"flex",
        justifyContent:"space-evenly",
        
    }));

    return (
        <>
            <AppBar position="absolute">
                <StyledToBar>
                    <MenuItem>about</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Project</MenuItem>
                </StyledToBar>

            </AppBar>

        </>
    )
}

export default NavBar