import RadiusOnScroll from '../RadiusOnScroll'
import dashboardImg from '@assets/generated_images/GPS_tracking_dashboard_interface_29624108.png'

export default function RadiusOnScrollExample() {
  return (
    <div className="h-[200vh]">
      <RadiusOnScroll imageSrc={dashboardImg} alt="GPS Dashboard">
        <div className="text-center text-white px-4">
          <h1 className="font-display text-6xl font-bold mb-4">
            Scroll to see the effect
          </h1>
          <p className="text-xl">
            The image transforms as you scroll
          </p>
        </div>
      </RadiusOnScroll>
    </div>
  )
}
