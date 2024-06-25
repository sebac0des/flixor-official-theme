'use client'

export function Video({...props}:React.VideoHTMLAttributes<HTMLVideoElement>){
    return <video
    {...props}
  ></video>
}