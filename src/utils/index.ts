export const getReadingTime = (text: String): Number => {
    const wpm = 500;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
}

export const formatDate = (date: Date): string => {
    const d = new Date(date)
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);

    return `${mo} ${da}, ${ye}`
}

export const sortByYear = (arr, criteria) => {
	return arr.reduce(function (obj, item) {

		// Check if the criteria is a function to run on the item or a property of it
		var key = new Date(item.modified).getFullYear()

		// If the key doesn't exist yet, create it
		if (!obj.hasOwnProperty(key)) {
			obj[key] = [];
		}

		// Push the value to the object
		obj[key].push(item);

		// Return the object to the next item in the loop
		return obj;

	}, {});
};