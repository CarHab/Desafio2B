import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
	container: {
		textAlign: 'center',
	},
	closeButton: {
		position: 'absolute',
		right: 20,
		top: 10,
		padding: 10,
		boxSizing: 'border-box',
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
			<Dialog className={classes.container} open={open} onClose={handleClose}>
				<DialogTitle>
					{title}
					<IconButton className={classes.closeButton} onClick={handleClose} edge='end'>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent className={classes.dados} dividers>
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
					<DialogContentText className={classes.text}>
						{description || 'Quadrinho sem descrição'}
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default Detalhes
