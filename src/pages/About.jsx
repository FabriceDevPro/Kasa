import Collapsible from "../components/Collapsible"; // Remplacez par le chemin réel vers votre composant
import PageTitle from "../components/PageTitle";

const About = () => {
  return (
    <div className="About">
      <PageTitle title="Kasa - A Propos" />
      <div className="collapse-container">
        <Collapsible title="Fiabilité">
          <p>{"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiés par nos équipes."}</p>
        </Collapsible>
        <Collapsible title="Respect">
          <p>{"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discrimintatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."}</p>
        </Collapsible>
        <Collapsible title="Service">
          <p>{"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discrimintatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."}</p>
        </Collapsible>
        <Collapsible title="Sécurité">
          <p>
            {
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          </p>
        </Collapsible>
      </div>
    </div>
  );
};

export default About;
