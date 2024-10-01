interface ElseIfProps {
    condition: boolean;
    renderIf: React.ReactNode;
    renderElse: React.ReactNode;
}

const ElseIf: React.FC<ElseIfProps> = ({condition, renderIf, renderElse}): React.ReactNode => {
    return condition ? <>{renderIf}</> : <>{renderElse}</>
}

export default ElseIf;