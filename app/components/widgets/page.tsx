import React, { useState } from 'react';

interface TruncatedTextProps {
    text: string; align: string;
    maxLines: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLines, align }) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    const renderText = () => {
        const lines = text.split('\n');
        const truncatedLines = expanded ? lines : lines.slice(0, maxLines);
        return truncatedLines.join('\n');
    };

    return (
        <div style={{ position: 'relative' }}>
            <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: expanded ? 5 : maxLines, WebkitBoxOrient: 'vertical' }}>
                {renderText()}
            </p>
            <button style={{ position: 'absolute', bottom: -30, right: 0 }} onClick={toggleExpansion}>{expanded ? 'Read less' : 'Read more'}</button>

        </div>);
};

export default TruncatedText;
