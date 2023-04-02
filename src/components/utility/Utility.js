import { URL_NEXT_ID } from './URL';

export async function getNextId() {
    const response = await fetch(URL_NEXT_ID);
    const json = await response.json();

    return json[0].id + 1;
}

export function checkWinner(pointA, pointB) {

    const winPoint = 52;

    if (pointA < winPoint && pointB < winPoint)
        return 0;

    if (pointA === pointB)
        return 3;

    if (pointA >= winPoint && pointB < winPoint)
        return 1;

    if (pointA < winPoint && pointB >= winPoint)
        return 2;

    return pointA > pointB ? 1 : 2;
}