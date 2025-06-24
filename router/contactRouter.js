import express from 'express'

import {ContactDetails,getDetails, updateQueryStatus} from "../controller/ContactController.js"

const contactRouter = express.Router();

contactRouter.post("/add-contact",ContactDetails);
contactRouter.get("/getDetails",getDetails);
contactRouter.post("/queryStatus/:id",updateQueryStatus);

export default contactRouter