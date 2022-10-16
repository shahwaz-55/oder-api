import {  Basecontroller } from "../controller/basecontroller";
import { IUser, User } from "../Oder_operation/oder_operation.Schema";

class UserController extends Basecontroller<IUser> {}

export const _OderController = new UserController(User);