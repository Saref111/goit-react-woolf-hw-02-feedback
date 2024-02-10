export const countPercentage = (total, value) => {
    return (value / total) * 100;
}

export const makeFirstLetterUppercase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
