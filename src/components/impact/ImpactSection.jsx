import StoryTimeline from "./StoryTimeline"
import StudentGallery from "./StudentGallery"
import EventGallery from "./EventGallery"
import ImpactStats from "./ImpactStats"

function ImpactSection() {
  return (
    <section id="impact">
      <StoryTimeline />
      <StudentGallery />
      <EventGallery />
      <ImpactStats />
    </section>
  )
}

export default ImpactSection