export const cleanText = (text: string) => {
    return text.normalize("NFC").replace(/\u200B/g, "");
};
