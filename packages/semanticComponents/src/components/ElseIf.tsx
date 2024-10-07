import React from "react";

/**
 * A conditional rendering component that works like "else if" in JavaScript. It should be used in conjunction with `If`.
 *
 * @param {boolean} condition - The condition to evaluate.
 * 
 * Example usage:
 * <If condition={isLoggedIn}>
 *   <div>Logged In</div>
 * </If>
 * <ElseIf condition={!isLoggedIn}>
 *   <div>Logged Out</div>
 * </ElseIf>
 */

interface ElseIfProps {
    condition: boolean;
    renderIf: React.ReactNode;
    renderElse: React.ReactNode;
}

const ElseIf: React.FC<ElseIfProps> = ({condition, renderIf, renderElse}): React.ReactNode => {
    return condition ? <>{renderIf}</> : <>{renderElse}</>
}

export default ElseIf;