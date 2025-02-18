import express from 'express';
import { createUser, getUser, getSpecificUser, deleteUser, updateSpecificUser } from '../controllers/users.js';


const router = express.Router();

router.get('/',getUser);

//post user
router.post('/', createUser);

//get specific user by ID
router.get('/:id',getSpecificUser );

//delete users
router.delete('/:id',deleteUser );

//update users
router.patch('/:id', updateSpecificUser);


export default router;