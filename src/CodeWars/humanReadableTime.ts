export function humanReadable(seconds: number): string {
    const hours = seconds / 3600;
    const minutes = (seconds / 60) % 60
    const sec = seconds % 60;

    const zeroPad = (num: number, places: number) => String(Math.floor(num)).padStart(places, '0')

    return `${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(sec, 2)}`;
}