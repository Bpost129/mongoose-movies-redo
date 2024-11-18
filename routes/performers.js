import { Router } from "express"
import * as performersCtrl from '../controllers/performers.js'

const router = Router()

router.get('/new', performersCtrl.new)

export { router }