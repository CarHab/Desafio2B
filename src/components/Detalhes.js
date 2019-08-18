import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
	container: {
		textAlign: 'center',
	},
	dados: {
		display: 'flex',
		flexDirection: 'row',
	},
	padding: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	bold: {
		color: 'black',
		fontWeight: 'bold',
	},
	text: {
		color: '#333',
		fontSize: 18,
	},
})

const Detalhes = ({ open, handleClose, title, description, year, issue, series, creator }) => {
	const classes = useStyles()
	return (
		<div>
			<Dialog
				className={classes.container}
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
				<DialogContent className={classes.dados}>
					<DialogContentText className={classes.padding}>
						<span className={classes.bold}>Criado por: </span>
						{creator}
					</DialogContentText>
					<DialogContentText className={classes.padding}>
						<span className={classes.bold}>Série: </span>
						{series}
					</DialogContentText>
					<DialogContentText className={classes.padding}>
						<span className={classes.bold}>Ano: </span>
						{year}
					</DialogContentText>
					<DialogContentText className={classes.padding}>
						<span className={classes.bold}>Edição: </span>
						{issue}
					</DialogContentText>
				</DialogContent>
				<DialogContent>
					<DialogContentText id='alert-dialog-description' className={classes.text}>
						{description || 'Quadrinho sem descrição'}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary' variant='contained'>
						Fechar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default Detalhes
