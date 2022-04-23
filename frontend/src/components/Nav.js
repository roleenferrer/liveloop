import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles({
	feature: {
		alignItems: "center",
	},
	person: {
		alignItems: "center",
	},
});

// Primary function for loading app
function Nav() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<React.Fragment>
			<Button
				className={classes.feature}
				id="featureButton"
				aria-controls={open ? "featureMenu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<ListIcon sx={{ color: "black"}} />
			</Button>
			<Menu
				id="featureMenu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				aria-labelledby="featureButton"
				getContentAnchorEl={null}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
			>
				<MenuItem onClick={handleClose}>Feature1</MenuItem>
				<MenuItem onClick={handleClose}>Feature2</MenuItem>
				<MenuItem onClick={handleClose}>Feature3</MenuItem>
			</Menu>
			<Button
				className={classes.person}
				id="loginButton"
				onClick={console.log("Person Clicked")}
			>
				<PersonIcon fontSize="large" sx={{ color: "black" }} />
			</Button>
		</React.Fragment>
	);
}

export default Nav;