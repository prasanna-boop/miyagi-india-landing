"use client"

import { cn } from "@/lib/utils"

interface Avatar {
  imageUrl: string
  profileUrl: string
}
interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: Avatar[]
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-3.5 rtl:space-x-reverse items-center", className)}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            key={index}
            className="h-10 w-10 rounded-full border-2 border-black object-cover"
            src={url.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-zinc-900 text-center text-sm font-bold text-white shadow-sm">
        +
      </div>
    </div>
  )
}
