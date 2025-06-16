import type { MutableRefObject } from "react";
import { useKeenSlider } from "keen-slider/react"
import type { KeenSliderPlugin } from "keen-slider/react"
import type { KeenSliderInstance } from "keen-slider"
import "keen-slider/keen-slider.min.css"


type Props = {
  images: string[]
}

const ThumbnailPlugin = (
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin => {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide: HTMLElement) => {
        slide.classList.remove("active")
      })
    }

    function addActive(idx: number) {
      slider.slides[idx]?.classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide: HTMLElement, idx: number) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) {
            mainRef.current.moveToIdx(idx)
          }
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()

      mainRef.current.on("animationStarted", (main: KeenSliderInstance) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function ImageGallery({ images }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
     slides: {
        perView: 1,
        spacing: 200,
        origin: 'center'
      },
  })

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className="flex flex-col gap-4">
      {/* Main gallery */}
      <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
        {images.map((src, index) => (
          <div key={index} className="keen-slider__slide">
            <img
              src={src}
              alt={`Product ${index + 1}`}
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div ref={thumbnailRef} className="keen-slider thumbnail max-w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide cursor-pointer transition border-2 border-transparent [&.active]:border-success rounded-md"
          >
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-[90px] object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
