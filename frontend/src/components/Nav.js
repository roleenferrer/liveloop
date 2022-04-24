import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
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
				<Button onClick={handleClose} href = "/feature1">Feature1</Button>
				<Button onClick={handleClose} href = "/feature2">Feature2</Button>
				<Button onClick={handleClose} href = "/feature3">Feature3</Button>
			</Menu>
			<Button
				className={classes.person}
				id="loginButton"
				onClick={console.log("Person Clicked")}
				href = "/login"
			>
				<PersonIcon fontSize="large" sx={{ color: "black" }} />
			</Button>
		</React.Fragment>
	);
}

export default Nav;