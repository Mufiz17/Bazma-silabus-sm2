const jwt = require('jsonwebtoken');
const scrtKey = '@smktibazma';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1SWQiOjEsInVOYW1lIjoiSm9obiBEb2UiLCJjbHMiOiJYSS1TSUpBIiwiaWF0IjoxNzE0NjMzMTA2fQ.CBctaX2Vc6vJzG0waiwtS7u8ZxLX3cbRv8df8V7gAuU';

jwt.verify(token, scrtKey, (err, decoded) => {
    if (err) console.log(err);
    else console.log('Token is Valid');
    delete decoded.iat;
    console.log(decoded);
})