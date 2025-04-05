export function analyzerSyntax(syntax: string, language: string) {
    const analyzer = {
        functions: 0,
        variables: 0,
        comments: 0,
        loops: 0,
        ifs: 0,
        classes: 0,
        methods: 0,
        conditionals: 0,
    };
    const lines = syntax.split("\n");

    for (let line of lines) {
        const trimmedLine = line.trim();
        if (language === "JavaScript" || language === "TypeScript") {
            if (/function\s+|\s*=>/.test(trimmedLine)) analyzer.functions++;
            if (/var|let|const/.test(trimmedLine)) analyzer.variables++;
            if (/\/\//.test(trimmedLine)) analyzer.comments++;
            if (/for|while|do|if|else/.test(trimmedLine)) analyzer.loops++;
            if (/if\s*\(/.test(trimmedLine)) analyzer.ifs++;
            if (/class\s+/.test(trimmedLine)) analyzer.classes++;
            if (/(\w+)\s*=\s*\w+/.test(trimmedLine)) analyzer.methods++;
        } else if (language === "Python") {
            if (/def\s+/.test(trimmedLine)) analyzer.functions++;
            if (/for\s+|while\s+/.test(trimmedLine)) analyzer.loops++;
            if (/if\s+|elif\s+|else:/.test(trimmedLine)) {
                analyzer.conditionals++;
            }
            if (/^\s*class\s+/.test(trimmedLine)) analyzer.classes++;
            if (
                /^\s*def\s+/.test(trimmedLine) &&
                !/^\s*def\s+__init__\s+/.test(trimmedLine)
            ) analyzer.methods++;
        }
    }
    return analyzer;
}
