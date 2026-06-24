import Navbar from "../components/Navbar";
import restaurantImage from "../assets/photo.jpg";
import { useState } from "react";
import { FaShoppingCart, FaMoneyBillWave, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [commandes, setCommandes] = useState(128);
  const [notification, setNotification] = useState(false);
  const [recherche, setRecherche] = useState("");
  const [filtre, setFiltre] = useState("Tous");
  const [showModal, setShowModal] = useState(false);
  const [client, setClient] = useState("");
  const [plat, setPlat] = useState("");
  const [statut, setStatut] = useState("En attente");
  const navigate = useNavigate();
  const [commandesData, setCommandesData] = useState([
  { id: 1, client: "Mansour", plat: "Burger", statut: "Livrée" },
  { id: 2, client: "Amar", plat: "Pizza", statut: "Préparation" },
  { id: 3, client: "Gray", plat: "Poulet", statut: "En attente" },
  { id: 4, client: "Fatou", plat: "Tacos", statut: "Livrée" },
  { id: 5, client: "Ibrahima", plat: "Pizza", statut: "Livrée" },
  { id: 6, client: "Awa", plat: "Burger", statut: "Préparation" },
  { id: 7, client: "Seydou", plat: "Poulet", statut: "En attente" },
  { id: 8, client: "Mariam", plat: "Poisson", statut: "Livrée" },
  { id: 9, client: "Ali", plat: "Tacos", statut: "Préparation" },
  { id: 10, client: "Khady", plat: "Burger", statut: "Livrée" },
  { id: 11, client: "Omar", plat: "Pizza", statut: "En attente" },
  { id: 12, client: "Aminata", plat: "Poulet", statut: "Livrée" },
  { id: 13, client: "Moussa", plat: "Poisson", statut: "Préparation" },
  { id: 14, client: "Rokhaya", plat: "Tacos", statut: "Livrée" },
  { id: 15, client: "Cheikh", plat: "Burger", statut: "En attente" },
  { id: 16, client: "Ndeye", plat: "Pizza", statut: "Préparation" },
  { id: 17, client: "Babacar", plat: "Poulet", statut: "Livrée" },
  { id: 18, client: "Yacine", plat: "Poisson", statut: "En attente" },
  { id: 19, client: "Mamadou", plat: "Burger", statut: "Livrée" },
  { id: 20, client: "Astou", plat: "Tacos", statut: "Préparation" },
  { id: 21, client: "Issa", plat: "Pizza", statut: "Livrée" },
  { id: 22, client: "Aïcha", plat: "Poulet", statut: "En attente" },
  { id: 23, client: "Jean", plat: "Burger", statut: "Livrée" },
]);
  const forteAffluence = commandes > 150;
  return (
    <>
      <Navbar />
      <div className="bg-white shadow-md mx-6 mt-24 rounded-2xl p-6 flex justify-between items-center">

  <div>
    <h1 className="text-3xl font-bold text-gray-800">
      Dashboard Restaurant
    </h1>
    <p className="text-gray-500">
      Bienvenue sur votre espace de gestion
    </p>
  </div>

  <div className="flex items-center gap-4">
    <div className="bg-red-100 px-4 py-2 rounded-lg">
      🔔 3 Notifications
    </div>
<button
  onClick={() => navigate("/login")}
  className="bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Déconnexion
</button>
    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
      A
    </div>
  </div>

</div>
      <section className="min-h-[80vh] pt-20 flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-red-600 to-orange-500 text-white"
       style={{
    backgroundImage:  `url(${restaurantImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>

  <h2 className="text-5xl font-bold mb-6">
    Gérez votre restaurant comme un pro
  </h2>

  <p className="text-xl max-w-2xl mb-8">
    Suivez les commandes, gérez les menus et analysez vos performances
    depuis une seule plateforme.
  </p>

  <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
    Découvrir
  </button>

</section>

{/*Cartes de stats*/}

<section className="py-16 px-6">
  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white  rounded-2xl border border-gray-200 shadow-x1 p-6 hover:-translate-y-2 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-4">
  <FaShoppingCart className="text-2xl text-red-600" />
</div>
      <h3 className="text-3xl font-bold text-red-600 transition-all duration-300">
  {commandes}
</h3>
      <p>Commandes aujourd'hui</p>
      <p className="text-sm text-green-600 font-medium mt-2">
  ▲ +12 % par rapport à hier
</p>
      <button
   onClick={() => setShowModal(true)}
  className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:scale-105 transition"
>
  Nouvelle commande
</button>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
  <FaMoneyBillWave className="text-2xl text-green-600" />
</div>
      <h3 className="text-3xl font-bold text-green-600">425 000 FCFA</h3>
      <p>Revenus du jour</p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
  <FaClock className="text-2xl text-blue-600" />
</div>
      <h3 className="text-3xl font-bold text-blue-600">17 min</h3>
      <p>Temps moyen de préparation</p>
    </div>

  </div>
</section>

 {/*tableau*/}

<section className="py-16 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold mb-6">
    Commandes récentes
  </h2>
  <div className="flex gap-3 mb-6 flex-wrap">
  {["Tous", "Livrée", "Préparation", "En attente"].map((statut) => (
    <button
      key={statut}
      onClick={() => setFiltre(statut)}
      className={`px-4 py-2 rounded-full transition ${
        filtre === statut
          ? "bg-red-600 text-white"
          : "bg-white border border-gray-300 hover:bg-gray-100"
      }`}
    >
      {statut}
    </button>
  ))}
</div>
  <input
  type="text"
  placeholder="🔍 Rechercher un client..."
  value={recherche}
  onChange={(e) => setRecherche(e.target.value)}
  className="w-full mb-6 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
/>

  <div className="bg-white rounded-2xl borde border-gray-200  overflow-hidden">

    <div className="grid grid-cols-4 bg-gray-900 text-white p-5 font-semibold tracking-wide">

      <p>ID</p>
      <p>Client</p>
      <p>Plat</p>
      <p>Statut</p>
    </div>
{commandesData
  .filter((commande) => {
  const texte = recherche.toLowerCase();

  return (
  (filtre === "Tous" || commande.statut === filtre) &&
  (
    commande.client.toLowerCase().includes(texte) ||
    commande.plat.toLowerCase().includes(texte) ||
    commande.statut.toLowerCase().includes(texte)
  )
);
})
  .map((commande) => (
  <div
    key={commande.id}
     className="grid grid-cols-4 p-4 border-b hover:bg-red-50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer"
  >
    <p>#{commande.id}</p>
    <p>{commande.client}</p>
    <p>{commande.plat}</p>
    <span
  className={
    commande.statut === "Livrée"
      ? "px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium text-sm"
      : commande.statut === "Préparation"
      ? "px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium text-sm"
      : "px-3 py-1 rounded-full bg-red-100 text-red-700 font-medium text-sm"
  }
>
  {commande.statut}
</span>
  </div>
))}

  </div>
</section>

{/* Alertes intelligentes */}
{notification && (
  <div className="fixed top-24 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
    ✅ Nouvelle commande enregistrée
  </div>
)}
<section className="py-16 px-6">
  <h2 className="text-3xl font-bold mb-6">
    Alertes
  </h2>

  <div className="space-y-4">
    {forteAffluence && (
  <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded mb-4">
    🔥 Forte affluence : plus de 150 commandes aujourd'hui !
  </div>
)}

    <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded">
      ⚠️ Commande #003 en attente depuis 20 minutes.
    </div>

    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
      🍔 Stock de Burgers faible.
    </div>

    <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded">
      ✅ Toutes les livraisons sont à jour.
    </div>

  </div>
</section>
{showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white w-96 rounded-xl p-6 shadow-2xl">

      <h2 className="text-2xl font-bold mb-4">
        Nouvelle commande
      </h2>

      <input
        type="text"
        placeholder="Nom du client"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
      />

      <input
        type="text"
        placeholder="Nom du plat"
        value={plat}
        onChange={(e) => setPlat(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
      />

      <select
        value={statut}
        onChange={(e) => setStatut(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
      >
        <option>En attente</option>
        <option>Préparation</option>
        <option>Livrée</option>
      </select>

      <button
        onClick={() => {
          const nouvelleCommande = {
            id: commandesData.length + 1,
            client,
            plat,
            statut,
          };

          setCommandesData([...commandesData, nouvelleCommande]);

          setCommandes(commandes + 1);

          setClient("");
          setPlat("");
          setStatut("En attente");

          setShowModal(false);

          setNotification(true);

          setTimeout(() => {
            setNotification(false);
          }, 3000);
        }}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
      >
        Ajouter la commande
      </button>

      <button
        onClick={() => setShowModal(false)}
        className="w-full mt-3 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
      >
        Fermer
      </button>

    </div>
  </div>
)}

<footer className="bg-gray-900 text-white text-center py-6">
  © 2026 FoodManager - Gestion intelligente de restaurant
</footer>
    </>
  );
}
export default Dashboard;