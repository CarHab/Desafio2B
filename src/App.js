import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ComicCard from './components/ComicCard'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'
import { createMuiTheme, MuiThemeProvider, makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import md5 from 'md5'

const theme = createMuiTheme({
	palette: {
		primary: { 500: '#EB1C24' },
	},
})

const useStyles = makeStyles({
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	pagesContainerTop: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginTop: 50,
	},
	pagesContainerBottom: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: 50,
	},
	searchContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	textField: {
		textAlign: 'center',
	},
})

//dados necessários para a API
const ts = new Date().getTime()
const dateRange = '2000-01-01,2019-12-31'
const apiKey = '96e6742ab01695f8b7efbf20116ccefc'
const privateKey = '5decf7f546d7cdbea8c641bad4974e35dc650e8c'
const hash = md5(ts + apiKey + privateKey)
const limit = 10
const url = `http://gateway.marvel.com/v1/public/comics?limit=${limit}&apikey=${apiKey}&dateRange=${dateRange}&formatType=comic&hasDigitalIssue=true`
const config = {
	ts,
	apiKey,
	hash,
}

const App = () => {
	const [comics, setComics] = useState([])
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [query, setQuery] = useState('')
	const [comicsPerPage] = useState(10)
	const classes = useStyles()

	//chamada da API para trazer os quadrinhos
	useEffect(() => {
		const getComics = async () => {
			setLoading(true)
			const res = await axios.get(url, config)
			setComics(res.data.data.results)
			setLoading(false)
		}
		getComics()
	}, [])

	//Guardar string do campo de busca
	const handleSearch = event => setQuery(event.target.value)

	//filtrar quadrinhos baseado no input do usuario
	const filteredComics = query => {
		//calcular a quantidade de páginas
		const indexOfLastComic = currentPage * comicsPerPage
		const indexOfFirstComic = indexOfLastComic - comicsPerPage

		let currentComics = []

		//retornar todos os quadrinhos caso o input esteja vazio
		if (query === '') {
			currentComics = comics.slice(indexOfFirstComic, indexOfLastComic)
			return currentComics
		}

		//loops para verificar se quadrinho contém presonagem buscado
		comics.forEach(item => {
			item.characters.items.forEach(character => {
				//infelizmente, o usuário deve digitar o nome inteiro do personagem, ex: spider-man
				if (character.name.toLowerCase() === query.toLowerCase()) {
					currentComics.push(item)
				}
			})
		})

		return currentComics
	}

	//função que é passada ao componente Paginate.js
	const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<MuiThemeProvider theme={theme}>
			<Navbar />
			{!loading ? (
				<div>
					<div className={classes.searchContainer}>
						<TextField
							id='search'
							label='Buscar por personagem'
							className={classes.textField}
							onChange={val => handleSearch(val)}
							margin='normal'
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<Search />
									</InputAdornment>
								),
							}}
						/>
					</div>
					<div className={classes.pagesContainerBottom}>
						<Pagination
							className={classes.pageBtnsBottom}
							comicsPerPage={comicsPerPage}
							totalComics={limit}
							paginate={paginate}
						/>
					</div>
				</div>
			) : (
				<div />
			)}
			<Grid container className={classes.grid}>
				{loading ? (
					<CircularProgress style={{ marginTop: 50 }} />
				) : (
					//renderizar os qadrinhos retornados pela função de busca
					filteredComics(query).map(comic => {
						return (
							<Grid item xs={12} md={5} key={comic.id}>
								<ComicCard
									title={comic.title}
									creator={comic.creators.items[0].name}
									cover={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
									description={comic.description}
									series={comic.series.name}
									year={comic.dates[0].date
										.split('')
										.splice(0, 4)
										.join('')}
									issue={comic.issueNumber}
								/>
							</Grid>
						)
					})
				)}
			</Grid>
			{!loading ? (
				<div className={classes.pagesContainerBottom}>
					<Pagination
						className={classes.pageBtnsBottom}
						comicsPerPage={comicsPerPage}
						totalComics={limit}
						paginate={paginate}
					/>
				</div>
			) : (
				<div />
			)}
			{!loading ? <Footer /> : <div />}
		</MuiThemeProvider>
	)
}

export default App
