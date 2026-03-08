export const metadata = {
    title: 'Sobre',
    description: 'Sobre o Radar Neural — um projeto de pesquisa e curadoria de notícias e análises sobre inteligência artificial.',
};

export default function SobrePage() {
    return (
        <>
            <h1 className="page-title">Sobre</h1>

            <div className="sobre-content">
                <p>
                    O <strong>Radar Neural</strong> é um projeto de pesquisa dedicado a acompanhar
                    e analisar as principais novidades do mundo da inteligência artificial.
                </p>
                <p>
                    A proposta é simples: trazer conteúdo direto sobre os
                    avanços, tendências e impactos da IA na tecnologia e na sociedade.
                </p>
                <p>
                    Nossas Redes Sociais -
                    Instagram e Threads: @radarneural.ai 
                    Spotfy: Radar Neural - Podcast
                    Youtube: @RadarNeural-AI

                </p>
            </div>
        </>
    );
}
