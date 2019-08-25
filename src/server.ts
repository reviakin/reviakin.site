import * as express from 'express'
import * as path from 'path'

import siteRouter from './site/site.router'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static(path.join(__dirname, 'public')))

app.use(siteRouter)
app.use('/', (req, res) => {
  res.render('404')
})

export const start = () => {
  app.listen(3000, () => console.log(`server start on 3000`))
}
