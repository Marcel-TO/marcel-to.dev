import { HeroSection } from '../../components/section-hero/hero-section'
import { ProjectSection } from '../../components/section-projects/project-section'
import './main-page.css'

export const MainPage = (): JSX.Element => {
    return(
        <>
            <HeroSection/>
            <ProjectSection/>
        </>
    )
}