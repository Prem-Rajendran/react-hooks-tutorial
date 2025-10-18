import SectionCSS from './section.module.css'

interface SectionProps {
  title: string;
  className?: string,
  description?: string
}

const Section: React.FC<React.PropsWithChildren<SectionProps>> = ({title, description, className, children}) => {
    return (
        <section className={`${SectionCSS.container} ${className}`}>
            <h1 className={SectionCSS.title}>{title}</h1>
            {description && <p className={SectionCSS.description}>"{description}"</p>}
            {children}
        </section>
    )
}

export default Section;