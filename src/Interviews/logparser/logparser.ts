export const logParser = (input: string): OutputTree[] => {
    const lines = readLogLines(input);
    const groups = groupById(lines);
    const output = []
    for (const [key, value] of Object.entries(groups)) {
        output.push(processGroup(key, value))
    }
    return output
}

interface LogLine {
    id: string;
    start: string;
    end: string;
    service: string;
    span: string;
    spanRoot: string;
}

const readLogLines = (input: string): LogLine[] => {
    return input.split('\n').map(readLogLine);
}

export const readLogLine = (input: string): LogLine => {
    //TODO: Validate if log line is valid
    const [start, end, id, service, temp] = input.split(' ')
    const [spanRoot, span] = temp.split('->')
    return {
        id,
        start,
        end,
        service,
        span,
        spanRoot
    }
}

const groupById = (lines: LogLine[]): { [id: string]: LogLine[] } => {
    const groups: { [id: string]: LogLine[] } = {}
    lines.forEach(line => {
        if (!groups[line.id]) {
            groups[line.id] = []
        }
        groups[line.id].push(line)
    })
    return groups
}

interface CallTrace {
    service: string;
    start: string;
    end: string;
    calls: CallTrace[];
}

interface OutputTree {
    id: string;
    root: CallTrace;
}
const processGroup = (id: string, group: LogLine[]): OutputTree => {
    const root = processGroupRecursive(group)[0]
    return {
        id,
        root
    }
}

function processGroupRecursive(group: LogLine[], spanRoot = "null"): CallTrace[] {
    return group.filter(line => line.spanRoot === spanRoot).map(val => {
        const { service, start, end, span } = val;
        return {
            service,
            start,
            end,
            calls: processGroupRecursive(group, span),
            span
        }
    })
}
