export function detectLanguage(language: string): string {
    if (/function\s+|const\s+|let\s+/.test(language)) {
        return "JavaScript";
    } else if (/def\s+|import\s+/.test(language)) {
        return "Python";
    } else if (/class\s+|public\s+static\s+void\s+main/.test(language)) {
        return "Java";
    }
    return "Unknown";
}
