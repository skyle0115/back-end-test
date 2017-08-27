const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let users = require('./user.js');
let workshops = require('./workshop.js');
let attendees = require('./attendees.js');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'fbId, accessToken, X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    setTimeout(next, 300);    
});

// login
app.post('/api/login/facebook', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        fbId: '123456789',
        accessToken: 'hello,world',
        role: 'admin'
    });
});

// view user
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id === 'me'
        ? 0
        : parseInt(req.params.id, 10);
    if (id < users.length) {
        let user = {
            profile: users[id],
            createWorkshops: [],
            attendWorkshops: []
        };
        workshops.forEach(workshop => {
            if (workshop.author.id === id) {
                user.createWorkshops.push(workshop);
            }
            if (workshop.attended && !workshop.canceled) {
                user.attendWorkshops.push(workshop);
            }
        });
        res.status(200).json(user);
    } else {
        res.status(404).send();
    }
});

// update user email
app.put('/api/users/:id/email', (req, res) => {
    const id = req.params.id === 'me'
        ? 0
        : parseInt(req.params.id, 10);
    if (id < users.length) {
        users[id] = {
            ...users[id],
            ...req.body
        };
        res.status(200).json(users[id]);
    } else {
        res.status(404).send();
    }
});

// update user fbUrl
app.put('/api/users/:id/fbUrl', (req, res) => {
    const id = req.params.id === 'me'
        ? 0
        : parseInt(req.params.id, 10);
    if (id < users.length) {
        users[id] = {
            ...users[id],
            ...req.body
        };
        res.status(200).json(users[id]);
    } else {
        res.status(404).send();
    }
});

// update user personalWebUrl
app.put('/api/users/:id/personalWebUrl', (req, res) => {
    const id = req.params.id === 'me'
        ? 0
        : parseInt(req.params.id, 10);
    if (id < users.length) {
        users[id] = {
            ...users[id],
            ...req.body
        };
        res.status(200).json(users[id]);
    } else {
        res.status(404).send();
    }
});

// update user introduction
app.put('/api/users/:id/introduction', (req, res) => {
    const id = req.params.id === 'me'
        ? 0
        : parseInt(req.params.id, 10);
    if (id < users.length) {
        users[id] = {
            ...users[id],
            ...req.body
        };
        res.status(200).json(users[id]);
    } else {
        res.status(404).send();
    }
});

// create workshop
app.post('/api/workshops', (req, res) => {
    const {title, category, goal, requirement, targetAudience} = req.body;
    const workshop = {
        id: workshops.length,
        state: 'judging',
        published: false,
        isAuthor: true,
        imageUrl: '',
        author: users[0],
        title,
        category,
        attendees: {
            friends: [],
            number: 0
        },
        phase: 'judging',
        minNumber: 0,
        maxNumber: 0,
        deadline: 0,
        closing: 0,
        prePrice: 0,
        price: 0,
        attended: false,
        canceled: false,
        startDatetime: 0,
        endDatetime: 0,
        location: '',
        goal,
        requirement,
        targetAudience,
        description: '',
        content: '',
        attendedMsg: ''
    }
    workshops.push(workshop);
    res.status(200).json({id: workshop.id});
});

// list workshop
app.get('/api/workshops', (req, res) => {
    res.status(200).json(workshops);
});

// view workshop
app.get('/api/workshops/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id < workshops.length) {
        res.status(200).json(workshops[id]);
    } else {
        res.status(404).send();
    }
});

// update workshop
app.put('/api/workshops/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id < workshops.length) {
        workshops[id] = {
            ...workshops[id],
            ...req.body
        };
        res.status(200).json(workshops[id]);
        console.log(workshop);
    } else {
        res.status(404).send();
    }
});

// get workshop state
app.get('/api/workshops/:id/state', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id < workshops.length) {
        res.status(200).json(workshops[id].state);
    } else {
        res.status(404).send();
    }
});

// set workshop state
app.put('/api/workshops/:id/state', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id < workshops.length) {
        workshops[id].state = req.body.state;
        res.status(200).json(workshops[id].state);
    } else {
        res.status(404).send();
    }
});

// get workshop published
app.get('/api/workshops/:id/published', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id < workshops.length) {
        res.status(200).json(workshops[id].published);
    } else {
        res.status(404).send();
    }
});

// set workshop published
app.put('/api/workshops/:id/published', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id < workshops.length) {
        workshops[id].published = req.body.published;
        res.status(200).json(workshops[id].published);
    } else {
        res.status(404).send();
    }
});

// get workshop attendees
app.get('/api/workshops/:id/attendees', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id < workshops.length) {
        res.status(200).json(attendees);
    } else {
        res.status(404).send();
    }
});

// attend workshop
app.post('/api/workshops/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id < workshops.length) {
        const workshop = workshops[id];
        if (!workshop.attended && !workshop.canceled) {
            workshop.attended = true;
        } else {
            workshop.attended = false;
            workshop.canceled = true;
        }
        res.status(200).json({attended: workshop.attended, canceled: workshop.canceled});
    } else {
        res.status(404).send();
    }
});

// delete workshop
app.delete('/api/workshops/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id < workshops.length) {
        let nextWorkshops = [];
        for (let i = 0; i < id; i++) {
            nextWorkshops.push(workshops[i]);
        }
        for (let i = id + 1; i < workshops.length; i++) {
            workshops[i].id--;
            nextWorkshops.push(workshops[i]);
        }
        workshops = nextWorkshops;
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});

const port = 3090;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
});
