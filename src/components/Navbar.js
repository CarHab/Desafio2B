import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	background: {
		backgroundColor: '#EB1C24',
	},
	pos: {
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
	},
})

const Navbar = () => {
	const classes = useStyles()
	return (
		<AppBar position='static' color='primary' className={classes.background}>
			<Toolbar className={classes.pos}>
				<Typography variant='h6' className={classes.title}>
					Lista de Quadrinhos
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
