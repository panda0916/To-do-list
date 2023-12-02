const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid')
// 靜態網頁...static
app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
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
    const { matter, action, id } = req.body;
    if (action === 'done') {
        const scheduleC = events.find(c => c.id === id);
        scheduleC.schedule = true
        // 取得已完成的項目
        const completedItems = events.filter(c => c.schedule);
        // 如果已完成的項目數量超過三筆，移除最早的項目
        if (completedItems.length > 3) {
            const oldestCompletedItem = completedItems.shift();
            events = events.filter(c => c.id !== oldestCompletedItem.id);
        }
    } else if (action === 'add') {
        events.push({ id: uuid(), matter, schedule: false });
    }
    res.redirect('/');
})

app.patch('/', (req, res) => {
    const { matter, newCommentText, id } = req.body;
    const foundComment = events.find(c => c.id === matter);
    foundComment.matter = newCommentText;
    res.redirect('/');
});
app.delete('/', (req, res) => {
    const { id } = req.body
    events = events.filter(c => c.id !== id )
    res.redirect('/')
})
// 漢堡 != 薯條 true
// 薯條 != 薯條 false 
// 可樂 != 薯條 true
// 漢堡1 漢堡1


app.listen(3100, () => {
    console.log('ON PORT 3100!')
})

