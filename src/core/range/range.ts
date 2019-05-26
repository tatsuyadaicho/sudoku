export default function range(length: number, start: number = 0) {
    return Array.from({ length }, (v, k) => k + start);
}
