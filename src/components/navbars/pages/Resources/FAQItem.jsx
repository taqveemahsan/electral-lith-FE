import React from "react";

export function FAQItem({ question, answer }) {
    return (
        <details className="group">
            <summary className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg cursor-pointer list-none">
                <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-stone-400 rounded-full group-open:bg-stone-400 transition-colors" />
                </div>
                <div className="font-medium">{question}</div>
            </summary>
            <div className="pl-14 pr-4 py-4 text-stone-600">{answer}</div>
        </details>
    );
}
