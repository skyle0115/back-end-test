const users = require('./user');
const template = {
    id: 0,
    state: 'judging' || 'judge_na' || 'judge_ac' || 'reached' || 'unreached',
    published: true,
    isAuthor: true,
    imageUrl: '',
    author: users[0],
    title: '',
    category: 'technology' || 'aesthetics',
    attendees: {
        friends: [],
        number: 0
    },
    phase: 'judging' || 'judge_na' || 'investigating' || 'over' || 'closing' || 'full' || 'reached' || 'unreached',
    minNumber: 10,
    maxNumber: 20,
    deadline: 0,
    closing: 0,
    prePrice: 0,
    price: 0,
    attended: false,
    canceled: false,
    startDatetime: 0,
    endDatetime: 0,
    location: '線上討論',
    goal: [
        '使用 HTML/CSS 建立自己的網頁', '修改現成的模板', '將靜態網頁發布至 Github Page'
    ],
    requirement: [
        '一台電腦', '一顆熱忱的心'
    ],
    targetAudience: ['任何對網頁設計有興趣的人'],
    description: '<h4>Hello, world!</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam amet aperiam, cum, saepe totam ea non doloremque nostrum maxime, aspernatur libero, sapiente delectus. Illo maiores nemo, beatae quas quam ipsam?</p>',
    content: '<h4>HTML</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><h4>CSS</h4><p>Est eveniet ut minima a repudiandae tempora maiores corporis, nihil incidunt? Tenetur quasi suscipit labore, perspiciatis odit quis blanditiis atque possimus libero!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas magnam, necessitatibus obcaecati eum mollitia velit. At autem odit magni obcaecati, provident, natus recusandae neque, laborum consequatur quos alias, molestias ratione.</p>',
    attendedMsg: '<h4>ALERT!!!</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas magnam, necessitatibus obcaecati eum mollitia velit. At autem odit magni obcaecati, provident, natus recusandae neque, laborum consequatur quos alias, molestias ratione.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas magnam, necessitatibus obcaecati eum mollitia velit. At autem odit magni obcaecati, provident, natus recusandae neque, laborum consequatur quos alias, molestias ratione.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas magnam, necessitatibus obcaecati eum mollitia velit. At autem odit magni obcaecati, provident, natus recusandae neque, laborum consequatur quos alias, molestias ratione.</p>'
};

module.exports = [
    {
        ...template,
        id: 0,
        state: 'judge_ac',
        published: true,
        author: users[0],
        isAuthor: true,
        imageUrl: 'https://proguide.com.sg/wp-content/uploads/2017/03/Course-Graphics-10-1.png',
        title: '0 基礎網頁設計工作坊',
        category: 'technology',
        attendees: {
            friends: [
                users[0], users[1]
            ],
            number: 5
        },
        phase: 'investigating',
        deadline: new Date("2017/8/22 23:59").getTime(),
        closing: new Date("2017/8/25 23:59").getTime(),
        prePrice: 0,
        price: 50,
        attended: false,
        canceled: false,
        startDatetime: new Date("2017/9/1 20:00").getTime(),
        endDatetime: new Date("2017/9/1 22:00").getTime()
    }, {
        ...template,
        id: 1,
        state: 'judge_ac',
        published: true,
        author: users[0],
        isAuthor: true,
        imageUrl: 'https://www.tutorialspoint.com/cplusplus/images/cpp-mini-logo.jpg',
        title: 'C/C++ 程式設計入門',
        category: 'technology',
        attendees: {
            friends: [],
            number: 5
        },
        phase: 'investigating',
        deadline: new Date("2017/8/24 23:59").getTime(),
        closing: new Date("2017/8/27 23:59").getTime(),
        prePrice: 150,
        price: 300,
        attended: false,
        canceled: false,
        startDatetime: new Date("2017/9/3 20:00").getTime(),
        endDatetime: new Date("2017/9/3 22:00").getTime()
    }, {
        ...template,
        id: 2,
        state: 'reached',
        published: true,
        author: users[2],
        isAuthor: false,
        imageUrl: 'http://abeautifulmess.typepad.com/.a/6a00d8358081ff69e201bb07bc6c8e970d-800wi',
        title: 'Photoshop 入門工作坊',
        category: 'aesthetics',
        attendees: {
            friends: [
                users[0], users[1]
            ],
            number: 15
        },
        phase: 'reached',
        deadline: new Date("2017/8/24 23:59").getTime(),
        closing: new Date("2017/8/31 23:59").getTime(),
        prePrice: 50,
        price: 150,
        attended: false,
        canceled: false,
        startDatetime: new Date("2017/9/5 20:00").getTime(),
        endDatetime: new Date("2017/9/5 22:00").getTime()
    }, {
        ...template,
        id: 3,
        state: 'reached',
        published: true,
        author: users[1],
        isAuthor: false,
        imageUrl: 'https://udemy-images.udemy.com/course/750x422/781502_305d_3.jpg',
        title: 'Python 爬蟲入門',
        category: 'technology',
        attendees: {
            friends: [
                users[0], users[1], users[2]
            ],
            number: 15
        },
        phase: 'closing',
        deadline: new Date("2017/8/15 23:59").getTime(),
        closing: new Date("2017/8/18 23:59").getTime(),
        prePrice: 0,
        price: 50,
        attended: false,
        canceled: false,
        startDatetime: new Date("2017/9/6 20:00").getTime(),
        endDatetime: new Date("2017/9/6 22:00").getTime()
    }, {
        ...template,
        id: 4,
        state: 'reached',
        published: true,
        author: users[2],
        isAuthor: false,
        imageUrl: 'https://img.imynest.com/uploads/D/E9/DE99631CFA.jpeg',
        title: '素描入門',
        category: 'aesthetics',
        attendees: {
            friends: [
                users[0], users[1]
            ],
            number: 15
        },
        phase: 'over',
        deadline: new Date("2017/8/10 23:59").getTime(),
        closing: new Date("2017/8/13 23:59").getTime(),
        prePrice: 50,
        price: 100,
        attended: false,
        canceled: false,
        startDatetime: new Date("2017/8/15 20:00").getTime(),
        endDatetime: new Date("2017/8/15 22:00").getTime()
    }, {
        ...template,
        id: 5,
        state: 'reached',
        published: true,
        author: users[3],
        isAuthor: false,
        imageUrl: 'http://www.fotobeginner.com/wp-content/uploads/2016/01/1-8-748x421.jpg',
        title: '攝影入門',
        category: 'aesthetics',
        attendees: {
            friends: [users[0]],
            number: 20
        },
        phase: 'full',
        deadline: new Date("2017/8/22 23:59").getTime(),
        closing: new Date("2017/8/25 23:59").getTime(),
        prePrice: 0,
        price: 50,
        attended: false,
        canceled: false,
        startDatetime: new Date("2017/9/1 20:00").getTime(),
        endDatetime: new Date("2017/9/1 22:00").getTime()
    }, {
        ...template,
        id: 6,
        state: 'unreached',
        published: true,
        author: users[0],
        isAuthor: true,
        imageUrl: 'https://s3.amazonaws.com/re-work-production/post_images/27/original/original.jpg?1446179738',
        title: 'Deep learning 入門',
        category: 'aesthetics',
        attendees: {
            friends: [users[0]],
            number: 5
        },
        phase: 'unreached',
        deadline: new Date("2017/8/13 23:59").getTime(),
        closing: new Date("2017/8/16 23:59").getTime(),
        prePrice: 100,
        price: 200,
        attended: false,
        canceled: false,
        startDatetime: new Date("2017/9/1 20:00").getTime(),
        endDatetime: new Date("2017/9/1 22:00").getTime()
    }, {
        ...template,
        id: 7,
        state: 'judging',
        published: false,
        author: users[0],
        isAuthor: true,
        imageUrl: '',
        title: '電腦繪圖入門',
        category: 'aesthetics',
        attendees: {
            friends: [],
            number: 0
        },
        phase: 'judging',
        deadline: 0,
        closing: 0,
        prePrice: 0,
        price: 0,
        attended: false,
        canceled: false,
        startDatetime: 0,
        endDatetime: 0
    }, {
        ...template,
        id: 8,
        state: 'judge_na',
        published: false,
        author: users[3],
        isAuthor: false,
        imageUrl: '',
        title: '日文入門',
        category: 'aesthetics',
        attendees: {
            friends: [],
            number: 0
        },
        phase: 'judge_na',
        deadline: 0,
        closing: 0,
        prePrice: 0,
        price: 0,
        attended: false,
        canceled: false,
        startDatetime: 0,
        endDatetime: 0
    }
];
