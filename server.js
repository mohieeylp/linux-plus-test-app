const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    const color = req.query.color || 'white';
    const text = req.query.text || 'Hello!';
    res.render('index', { color, text });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
