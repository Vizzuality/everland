import { Container } from 'containers/components/Container/Container'
import { ImagesGalleryRoot, GalleryBackground, GalleryWrapper } from './ImagesGallery.styles'
import { ImageItem } from '../ImageItem'
import { GalleryItem } from 'hooks/fetchProjectDetail'
import { useEffect } from 'react'

type ImagesGalleryProps = {
  gallery: GalleryItem[]
}

export const ImagesGallery = ({ gallery }: ImagesGalleryProps) => {
  const gridAreaMapper = (index: number) => {
    if (index === 0) return 'vertical1'
    if (index === 1) return 'horizontal1'
    if (index === 2) return 'horizontal2'
    if (index === 3) return 'vertical2'
  }

  useEffect(() => {
    const slider = document.querySelector('.galleryWrapper') as HTMLDivElement
    let isDown = false
    let startX
    let scrollLeft

    const _onMouseDown = (e: MouseEvent) => {
      isDown = true
      slider.classList.add('dragging')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const _onMouseLeave = () => {
      isDown = false
      slider.classList.remove('dragging')
    }

    const _onMouseUp = () => {
      isDown = false
      slider.classList.remove('dragging')
    }

    const _onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 3 //scroll-fast
      slider.scrollLeft = scrollLeft - walk
      console.log(walk)
    }

    slider.addEventListener('mousedown', _onMouseDown)
    slider.addEventListener('mouseleave', _onMouseLeave)
    slider.addEventListener('mouseup', _onMouseUp)
    slider.addEventListener('mousemove', _onMouseMove)

    return () => {
      slider.removeEventListener('mousedown', _onMouseDown)
      slider.removeEventListener('mouseleave', _onMouseLeave)
      slider.removeEventListener('mouseup', _onMouseUp)
      slider.removeEventListener('mousemove', _onMouseMove)
    }
  }, [])

  return (
    <GalleryBackground>
      <Container>
        <GalleryWrapper className="galleryWrapper">
          <ImagesGalleryRoot>
            {gallery.slice(0, 4).map((galleryItem, index) => {
              return (
                <ImageItem
                  title={galleryItem.caption.title}
                  description={galleryItem.caption.description}
                  imageUrl={galleryItem.src}
                  alt={galleryItem.alt}
                  gridArea={gridAreaMapper(index)}
                  key={galleryItem.caption.title}
                />
              )
            })}
          </ImagesGalleryRoot>
          {gallery.length > 4 && (
            <ImagesGalleryRoot>
              {gallery.slice(4, 8).map((galleryItem, index) => {
                return (
                  <ImageItem
                    title={galleryItem.caption.title}
                    description={galleryItem.caption.description}
                    imageUrl={galleryItem.src}
                    alt={galleryItem.alt}
                    gridArea={gridAreaMapper(index)}
                    key={galleryItem.caption.title}
                  />
                )
              })}
            </ImagesGalleryRoot>
          )}
        </GalleryWrapper>
      </Container>
    </GalleryBackground>
  )
}
