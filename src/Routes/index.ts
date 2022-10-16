import { Router } from "express";
//import { _OderController } from "../Oder_operation/Oder_operation.router";
import { user_registration_router } from "../Oder_operation/Oder_operation.router";

export const allRoutes: Record<string, Router> = {
    'Oder' : user_registration_router,
}