import { words } from './words';

export function getRandomWord() {
    return words[Math.ceil(Math.random() * words.length)]
}