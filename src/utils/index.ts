export const getReadingTime = (text: String): Number => {
    const wpm = 500;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
}