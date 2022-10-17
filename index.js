import { readFileSync, writeFileSync } from 'fs';

const json = readFileSync('data.json', 'utf8');
const object = JSON.parse(json);

const departments = {};

for (const { name, department } of object.employees){
    if (!departments.hasOwnProperty(department)) {
        departments[department] = [];
    }
    departments[department].push(name);
}

console.log(departments)

const result = { departments: [] };

for (const [name, employees] of Object.entries(departments)) {
    result.departments.push({ name, employees });
}

console.log(JSON.stringify(result));

const resultJson = JSON.stringify(result);
writeFileSync('result.json', resultJson);
