'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'

export default function ClientImage({
  imageComponent,
  description,
}: {
  imageComponent: StaticImageData | string
  description: string
}) {
  return (
    <Image
      src={`/portfolio${typeof imageComponent === 'string' ? imageComponent : imageComponent.src}`}
      alt={description}
      className="h-auto w-auto"
    />
  )
}
