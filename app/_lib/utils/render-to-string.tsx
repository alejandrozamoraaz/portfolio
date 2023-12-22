import { ReactElement, JSXElementConstructor } from 'react'

//See: https://github.com/vercel/next.js/issues/57771#issuecomment-1790619528
export async function renderToString(
    element: ReactElement<any, string | JSXElementConstructor<any>>,
): Promise<string> {
    const { renderToReadableStream } = await import("react-dom/server");

    const stream = await renderToReadableStream(element);
    const textStream = stream.pipeThrough(new TextDecoderStream());
    const reader = textStream.getReader();

    let result = "";
    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        result += value;
    }
    return result;
}
