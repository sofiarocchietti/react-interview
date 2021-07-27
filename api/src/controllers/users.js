let users = [
    {id: 1,
    name: 'Sofi', 
    email: 'sofiadvr19@gmail.com',
    password: 'password'},
]

let id = 2; 

function getAllUsers(req, res) {
    return res.send(users);
}

function addNewUser(req, res) {
    const { email, password, name } = req.body;
    if (!email || !password || !name) return res.status(400).send('Missing arguments')
    const user = users.find(u => u.email === email)
    if (user) return res.status(400).send('That mail already exists')
    users.push ({
        id: id++,
        name,
        email,
        password
    })
    res.send(users)
}

function verifyUser (req, res) {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send('Missing arguments')
    const user = users.find(u => u.email === email)
    if (!user) return res.status(400).send('User not found')
    if (user.password === password) return res.send(user)
}

module.exports = {
    addNewUser,
    getAllUsers,
    verifyUser
}

