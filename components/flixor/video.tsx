'use client'

import React, { useEffect, useRef, useState } from 'react';

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    intersectionMode?: boolean
    playOnHoverMode?:boolean
}

export function Video({ intersectionMode = false, playOnHoverMode = false, ...props }: VideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showControls, setShowControls] = useState(false)

    const handlePlayOnHover = (play:boolean) => {

        if(playOnHoverMode){
            const videoElement = videoRef.current;
            if (!videoElement) return
    
            if(play)videoElement.play()
            else videoElement.pause()
        }

        if(props.controls) return setShowControls(true)

    }


    useEffect(() => {
        if (intersectionMode) {
            const videoElement = videoRef.current;

            if (!videoElement) return;
            
            const handleIntersection = (entries: IntersectionObserverEntry[]) =>
                entries.forEach(entry => {
                    if (entry.isIntersecting && props.autoPlay) videoElement.play();
                    else videoElement.pause();
                });


            const observer = new IntersectionObserver(handleIntersection, {
                threshold: 0.5,
            });

            observer.observe(videoElement);

            return () => observer.unobserve(videoElement);
        }

    }, []);

    return <video controls={showControls}
        onMouseEnter={()=> handlePlayOnHover(true)}
    onMouseLeave={()=> handlePlayOnHover(false)}
    onEnded={()=> handlePlayOnHover(false)}
        ref={videoRef} {...props}></video>;
}
