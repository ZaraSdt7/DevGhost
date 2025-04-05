export function generateFixSuggestions(errors: string[]) {
    const suggestions: string[] = [];

    for (const error of errors) {
        if (error.includes("lacking ; or {}")) {
            suggestions.push(
                "Check if you have put ; at the end of your commands?",
            );
        } else if (error.includes("In Python, {} is not needed.")) {
            suggestions.push("Use indentation instead of {} in Python.");
        } else if (error.includes(": Forgotten")) {
            suggestions.push(
                'Check that you have used ":" at the end of conditions or loops.',
            );
        }
    }
    return suggestions;
}
