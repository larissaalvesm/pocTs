import Joi from "joi";
import { CreateClient } from "../protocols/client-protocol";


export const clientSchema = Joi.object<CreateClient>({
    name: Joi.string().required(),
    address: Joi.string().required()
})


