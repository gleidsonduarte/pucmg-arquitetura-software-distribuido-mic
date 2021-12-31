import App from './app';

App.listen(process.env.PORT, () => {
    console.log(`Server is running in port ${process.env.PORT}!`)
});
