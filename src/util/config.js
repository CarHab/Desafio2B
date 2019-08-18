const ts = new Date().getTime()
const dateRange = '2015-01-01,2019-12-31'
const apiKey = '96e6742ab01695f8b7efbf20116ccefc'
const privateKey = '5decf7f546d7cdbea8c641bad4974e35dc650e8c'
const hash = md5(ts + apiKey + privateKey)
const limit = this.state.limit
const url = `http://gateway.marvel.com/v1/public/comics?limit=${limit}&apikey=${apiKey}&dateRange=${dateRange}&formatType=comic&hasDigitalIssue=true`
const config = {
	ts,
	apiKey,
	hash,
}
