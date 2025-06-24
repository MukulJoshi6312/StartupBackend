import express from 'express'

import {ContactDetails,deleteQuery,getDetails, updateQueryStatus} from "../controller/ContactController.js"

const contactRouter = express.Router();

contactRouter.post("/add-contact",ContactDetails);
contactRouter.get("/getDetails",getDetails);
contactRouter.post("/queryStatus/:id",updateQueryStatus);
contactRouter.post("/deleteQuery/:id",deleteQuery);

export default contactRouter