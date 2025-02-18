import { v4 as uuidv4 } from 'uuid';


let users = []

export const createUser = (req,res) =>{

    const user = req.body;

    users.push({...user, id:  uuidv4()});

    res.send(`User with the username ${user.firstname} added to the database`);
}

export const getUser = (req, res) => {
    res.send(users);
}

export const getSpecificUser = (req,res)=>{
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);
    
    res.send(foundUser);
}

export const deleteUser = (req,res)=>{
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`User with an ID of ${id} has been deleted to database.`);
}


export const updateSpecificUser = (req,res) =>{
    const { id } = req.params;
    const {firstname, lastname,age} = req.body;
    const user = users.find((user) => user.id == id)

    if(firstname)
        user.firstname = firstname;

    if(lastname)
        user.lastname = lastname;

    if(age)
        user.age = age;
    
    res.send(`User with an ID of  ${id} has been updated`)
}