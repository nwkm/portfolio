'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="h-100vh px-24 text-center text-white bg-navy grid place-content-center">
            <h1 className="text-[8rem] rainbow-neon text-center">OOPS!</h1>
            <p className="mb-12">Something Broke on Server !</p>
            <div className="px-8">
                <button id="btn" onClick={() => reset()}>
                    Try again
                </button>
            </div>
        </main>
    );
}
