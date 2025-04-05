export function detectErrors(codes: string, language: string) {
    const errors: string[] = [];

    if (language === "JavaScript" || language === "TypeScript") {
        if (!/;\s*$/.test(codes) && !/{/.test(codes) && !/}/.test(codes)) {
            errors.push("You may have missed some ; or {} in your code.");
        }
    } else if (language === "Python") {
        if (/{|}/.test(codes)) {
            errors.push("In Python, {} is not needed.");
        }
    }
    return errors;
}
