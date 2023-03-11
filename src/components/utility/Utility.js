import { URL_NEXT_ID } from './URL';

export async function getNextId() {
    const response = await fetch(URL_NEXT_ID);
    const json = await response.json();

    return json[0].id + 1;
}

export function checkWinner(pointA, pointB) {

    if (pointA < 51 && pointB < 51)
        return 0;

    if (pointA === pointB)
        return 3;

    if (pointA >= 51 && pointB < 51)
        return 1;

    if (pointA < 51 && pointB >= 51)
        return 2;

    return pointA > pointB ? 1 : 2;
}