import { v1 as uuidv1 } from 'uuid';

export const SeasonItemsMock = [
    {
        id: uuidv1(),
        name: 'Autumn',
        color: 'orange',
    },
    {
        id: uuidv1(),
        name: 'Winter',
        color: 'skyblue',
    },
    {
        id: uuidv1(),
        name: 'Spring',
        color: 'green',
    },
    {
        id: uuidv1(),
        name: 'Summer',
        color: 'red',
    }
];

export const DayTimeItemsMock = [
    {
        id: uuidv1(),
        name: 'Morning',
        color: 'pink',
    },
    {
        id: uuidv1(),
        name: 'Noon',
        color: 'violet',
    },
    {
        id: uuidv1(),
        name: 'Evening',
        color: 'darkgray',
    },
    {
        id: uuidv1(),
        name: 'Night',
        color: 'darkblue',
    }
];