import type { Request, Response, NextFunction } from "express";
import getUsersApi from "../services/getUsersApi";
import mapUsersToDepartment from "../utils/mapUsersToDepartment";

const getDepartments = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsersApi();
    if (users.isErr()) {
      res.status(500).json({ error: users.error });
      return;
    }

    const department = mapUsersToDepartment(users.value);
    res.status(200).json(department);
    return;
  } catch (error) {
    next(error);
  }
};

export default getDepartments;
