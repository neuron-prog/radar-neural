export const metadata = {
    title: 'Sobre',
    description: 'Sobre o Radar Neural — um projeto pessoal de curadoria de notícias e análises sobre inteligência artificial.',
};

export default function SobrePage() {
    return (
        <>
            <h1 className="page-title">Sobre</h1>

            <div className="sobre-content">
                <p>
                    O <strong>Radar Neural</strong> é um projeto pessoal dedicado a acompanhar
                    e analisar as principais novidades do mundo da inteligência artificial.
                </p>
                <p>
                    A proposta é simples: trazer conteúdo direto, sem enrolação, sobre os
                    avanços, tendências e impactos da IA na tecnologia e na sociedade.
                </p>
                <p>
                    Este site é mantido por uma única pessoa, com o objetivo de criar um
                    espaço de reflexão e curadoria sobre um dos campos mais transformadores
                    da nossa geração.
                </p>
            </div>
        </>
    );
}
