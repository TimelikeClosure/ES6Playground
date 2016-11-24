const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' }
];

// const [{ location }] = companies;
// console.log(location);

const Google = {
    locations: ['Mountain View', 'New York', 'London']
}

const { locations: [ location ] } = Google;
console.log(location);
