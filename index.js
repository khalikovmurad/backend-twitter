const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(express.json())
app.use(require('./routes/users.route'))
app.use(require('./routes/posts.route'))
app.use(require('./routes/comments.route'))
app.use(require('./routes/favorites.route'))

coonectToMongoose('mongodb+srv://muradkhalikov211:00000000@cluster0.sh2uq2q.mongodb.net/')
.then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

  app.listen(4000), () => console.log('server has been started')