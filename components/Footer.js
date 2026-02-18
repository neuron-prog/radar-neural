export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {year} Radar Neural. Todos os direitos reservados.</p>
        </footer>
    );
}
