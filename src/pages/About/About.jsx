import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import './About.scss';

const collapseItems = [
  {
    title: 'Fiabilité',
    content:
      "Les annonces publiées sur Kasa garantissent une fiabilité totale. Les logements sont vérifiés et contrôlés par nos équipes avant chaque publication.",
  },
  {
    title: 'Respect',
    content:
      "La bienveillance et le respect sont les maîtres mots de la communauté Kasa. Nous veillons à ce que chaque échange entre hôtes et voyageurs se déroule dans les meilleures conditions.",
  },
  {
    title: 'Sécurité',
    content:
      "La sécurité de nos utilisateurs est notre priorité. Paiements sécurisés, profils vérifiés et assistance disponible à tout moment.",
  },
  {
    title: 'Service',
    content:
      "Une réponse rapide, une réservation simplifiée : Kasa vous permet de trouver et réserver votre logement idéal en quelques clics seulement.",
  },
];

const About = () => {
  return (
    <>
      <Banner small />
      <div className="about__collapses">
        {collapseItems.map(({ title, content }) => (
          <Collapse key={title} title={title}>
            <p>{content}</p>
          </Collapse>
        ))}
      </div>
    </>
  );
};

export default About;
