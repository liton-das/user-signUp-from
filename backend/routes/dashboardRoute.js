const { getDashboardController } = require('../controllers/dashboardController')
const { isAuthenticated } = require('../middleware/authMiddleware')

const router=require('express').Router()
// -------------------- get dashboard ------------------------
router.get('/',isAuthenticated,getDashboardController)




module.exports=router