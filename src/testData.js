const test = [
    [
        'Mark this task as done!',
        'An initial to-do to demostrate functionality',
        'Default',
        'Low priority',
        'Jan. 1, 2021',
        false,
    ],
    [
        'Do this thing too.',
        'An placeholder to test my loop.',
        'Things to do',
        null,
        null,
        false,
    ],
    [
        'Mail that letter.',
        null,
        'Things to do',
        'High priority',
        'Oct. 31, 2020',
        false,
    ],
    [
        'Fix the bathtub drain',
        null,
        'Home stuff',
        'High priority',
        'Tomorrow',
        false,
    ],
    [
        'Get fake pumpkins for the mantel',
        'Something fabric, maybe Pottery Barn',
        'Home stuff',
        null,
        'Someday',
        false,
    ],
    [
        'Pick up CSA',
        null,
        'Things to do',
        'High priority',
        'Nov. 3, 2020',
        false,
    ],
];

function getTestData() {
    return test;
}

export { getTestData }