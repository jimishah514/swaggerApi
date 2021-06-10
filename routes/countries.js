const  express = require("express")
const router = express.Router()

const countries = require('../db/countries')

/**
 * @swagger
 * components:
 *   schemas:
 *     Country:
 *       type: object
 *       
 */


/**
 * @swagger
 * /countries:
 *   get:
 *      summary: "Returns the list of all Countries"
 *      responses: 
 *       200: 
 *          description: The list of all countries
 *          content: 
 *             application/json:
 *                schema : 
 *                   type: array
 *                   items: 
 *                     ""$ref: '#/components/schemas/Country""
 * 
 * 
 */

router.get("/",(req,res) => {
    res.send({countries})
})

module.exports = router;