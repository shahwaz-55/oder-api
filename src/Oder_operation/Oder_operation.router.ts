import express, { Router } from 'express';
import { _OderController  } from './Oder_operation.controller';
import { Oder_operation_validator } from './Oder_operation.validator';

//const user_registration_router: Router = express.Router();

/*
    ============== old method =====================
    studentRouter.get('/all', getAllStudents)
    studentRouter.get('/:student_id', getAllStudents)
    studentRouter.post('/', ()=>{});
    studentRouter.put('/', ()=>{});
    studentRouter.delete('/', ()=>{});
*/

// new classic and sexy method.

// ! there's still a major issue that exist in the API, please find that...
// ! it's can be critical to server health.
export const user_registration_router = Router();
user_registration_router
    .get('/all', (req, res) => _OderController.find(res, {}))
    .post('/',Oder_operation_validator, (req, res) => _OderController.create(res, req.body))
    .put('/:id', (req, res) => _OderController.update(res, req.params.id, req.body))
    .delete('/:id', (req, res) => _OderController.delete(res, req.params.id))

