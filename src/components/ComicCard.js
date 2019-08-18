import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Detalhes from './Detalhes'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		margin: 10,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		boxShadow:
			'0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
	},

	image: {
		display: 'block',
		maxWidth: 300,
		maxHeight: 250,
		width: 'auto',
		height: 'auto',
	},

	textContent: {
		width: '100%',
		padding: 20,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'justify',
	},

	creatorStyle: {
		textAlign: 'center',
		marginTop: -10,
		fontSize: 20,
	},
})

const ComicCard = ({ title, creator, cover, description, year, issue, series }) => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div className={classes.container}>
			<img src={cover} className={classes.image} alt='cover' />
			<div className={classes.textContent}>
				<h2>{title}</h2>
				<p className={classes.creatorStyle}>{creator}</p>
				<Button
					onClick={handleClickOpen}
					variant='contained'
					color='primary'
					className={classes.button}>
					Detalhes
				</Button>
			</div>
			<Detalhes
				open={open}
				handleClose={handleClose}
				handleClickOpen={handleClickOpen}
				title={title}
				description={description}
				creator={creator}
				year={year}
				series={series}
				issue={issue}
			/>
		</div>
	)
}

export default ComicCard
