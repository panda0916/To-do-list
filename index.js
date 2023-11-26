const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid')
// 靜態網頁...static
app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// /css/mycss.css

let events = [
    {
        id: uuid(),
        matter: '買牛奶',
        schedule: false
    },
    {
        id: uuid(),
        matter: '買牛奶2',
        schedule: true
    },
    {
        id: uuid(),
        matter: '跑步',
        schedule: false
    }
]

app.get('/', (req, res) => {
    res.render('abc/index', { events })
})


app.post('/', (req, res) => { // 新增, 完成
    const { matter, action, schedule } = req.body;
    const eventId = uuid()
    if (action === 'done') {
        const scheduleC = events.find(c => c.id === matter);
        scheduleC.schedule = true
    } else if (action === 'add') {
        const existingItem = events.find(c => c.id === matter && c.schedule === false);
        if (!existingItem) {
            events.push({ id: eventId, matter, schedule: false });
    } 
}
    res.redirect('/');
})

app.patch('/', (req, res) => {
    const { id } = req.params
    const { matter, newCommentText } = req.body;
    const foundComment = events.find(c => c.matter === matter);
    foundComment.matter = newCommentText;
    res.redirect('/');
});
app.delete('/', (req, res) => {
    const { id } = req.body
    events = events.filter(c => c.id !== id)
    res.redirect('/')
})



app.listen(3100, () => {
    console.log('ON PORT 3100!')
})