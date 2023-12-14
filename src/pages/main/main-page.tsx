import { HeroSection } from '../../components/section-hero/hero-section'
import { PersonalSection } from '../../components/section-personal/personal-section'
import { ProgrammingSection } from '../../components/section-programming/programming-section'
import { ProjectSection } from '../../components/section-projects/project-section'
import './main-page.css'

export const MainPage = (): JSX.Element => {
    return(
        <>
            <HeroSection/>
            {/* <PersonalSection/>
            <ProgrammingSection/> */}
            <ProjectSection/>
        </>
    )
}