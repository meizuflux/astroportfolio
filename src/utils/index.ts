export const getReadingTime = (text: String): Number => {
    const wpm = 500;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
}

export const formatDate = (date: Date): string => {
    const d = new Date(date)
    return d.toLocaleDateString('en-GB', {
        day : 'numeric',
        month : 'short',
        year : 'numeric'
    });
}