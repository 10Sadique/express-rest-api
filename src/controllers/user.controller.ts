import { Request, Response } from "express";
import { omit } from "lodash";
import { CreateUserInput } from "../schemas/user.schema";
import { createUser } from "../services/user.service";
import log from "../utils/logger";

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response
) {
    try {
        const user = await createUser(req.body); // call create user service

        return res.status(201).send(omit(user.toJSON(), "password"));
    } catch (error: any) {
        log.error(error);
        return res.status(409).send(error.message);
    }
}
