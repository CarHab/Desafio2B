import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
	container: {
		backgroundColor: '#333',
		width: '100%',
		height: 50,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	assinatura: {
		color: 'white',
	},
})

const Footer = () => {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<p className={classes.assinatura}>Carlos Habib - Desafio 2B Educação</p>
		</div>
	)
}

export default Footer
