import { type ImgHTMLAttributes } from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    fill?: boolean
    priority?: boolean
    sizes?: string
}

export default function Image({
    src,
    alt,
    fill,
    className = '',
    priority,
    sizes,
    ...props
}: ImageProps) {
    if (fill) {
        return (
            <img
                src={src}
                alt={alt}
                className={`absolute inset-0 w-full h-full ${className}`}
                loading={priority ? 'eager' : 'lazy'}
                {...props}
            />
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading={priority ? 'eager' : 'lazy'}
            {...props}
        />
    )
}
