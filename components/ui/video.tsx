'use client'

import React, { useEffect, useRef } from 'react';

export function Video({ ...props }: React.VideoHTMLAttributes<HTMLVideoElement>) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) return;

        const handleIntersection = (entries: IntersectionObserverEntry[]) => 
            entries.forEach(entry => {
                if (entry.isIntersecting) videoElement.play();
                else videoElement.pause();
            });
        

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, 
        });

        observer.observe(videoElement);

        return () => observer.unobserve(videoElement);
    }, []);

    return <video ref={videoRef} {...props}></video>;
}
