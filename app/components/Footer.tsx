export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <small>Copyright DadeSko {currentYear}</small>
      <small> </small>
      <small>This project is still under construction. Stay tuned for furture updates</small>
    </footer>
  );
}
