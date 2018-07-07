const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	// tslint:disable-next-line:no-console
	console.log(`Jobscale is listening on port ${PORT}!`);
});