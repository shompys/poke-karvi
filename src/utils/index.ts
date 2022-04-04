export const capitalizeFirstLetter = (text: string) => {
    if(!text) return 'No data'
    const capitalizeLetter = text?.charAt(0).toUpperCase();
    const lowerCaseText = text?.slice(1);
    return `${capitalizeLetter}${lowerCaseText}`;
}
