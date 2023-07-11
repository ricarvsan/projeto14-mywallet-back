import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import { transaction } from "../controllers/transaction.controller.js";
import { itemSchema } from "../schemas/transaction.schemas.js";


const transactionsRouter = Router();

transactionsRouter.post('/nova-transacao', validateAuth, validateSchema(itemSchema), transaction);

export default transactionsRouter;