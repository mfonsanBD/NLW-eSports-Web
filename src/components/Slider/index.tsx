import { forwardRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'
import './styles.css'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => (
  <div>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </div>
)

export default forwardRef(Slider)