export function autoComment(code: string, language: string): string {
    const lines = code.split("\n");
    const commnetLines: string[] = [];

    for (const line of lines) {
        if (language === "JavaScript" || language === "TypeScript") {
            if (/function/.test(line)) {
                commnetLines.push(`// this is function ${line}`);
            }
        } else if (language === "Python") {
            if (/def\s+/.test(line)) {
                commnetLines.push(`# this is function in Python`);
            }
        }
        commnetLines.push(line);
    }
    return commnetLines.join("\n");
}
