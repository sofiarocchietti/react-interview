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
    if (!email || !password || !name) return res.send('Missing arguments')
    const user = users.find(u => u.email === email)
    if (user) return res.send('This email is already registered')
    users.push ({
        id: id++,
        name,
        email,
        password
    })
    res.send(true)
}

function verifyUser (req, res) {
    const { email, password } = req.query;
    if (!email || !password) {
        return res.send('Missing arguments')
    } 
    const user = users.filter(u => u.email === email)
    if (!user.length){
        return res.send('User not found')
    } 
    if (user[0].password === password) {
        return res.send(true)
    }
}

module.exports = {
    addNewUser,
    getAllUsers,
    verifyUser
}

