import Navbar from "../components/Navbar";
import restaurantImage from "../assets/photo.jpg";
import shopSound from "../assets/shop-sound.mp3";
import { useState, useEffect, useRef } from "react";
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(shopSound);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
  }, []);

  const toggleSound = () => {
  if (!audioRef.current) return;
  if (audioRef.current.paused) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
};

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
      <div
        style={{
          backgroundImage: `url(${restaurantImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        {/* ── Bouton son flottant ── */}
        <button
          onClick={toggleSound}
          className="fixed bottom-6 right-6 z-50 bg-white/20 backdrop-blur-md border border-white/30 text-white text-2xl w-14 h-14 rounded-full shadow-lg hover:bg-white/30 hover:scale-110 transition-all duration-300"
          title="Musique on/off"
        >
          🎵
        </button>

        {/* ── Header Dashboard ── */}
        <div className="bg-white/10 backdrop-blur-md shadow-md mx-6 mt-24 rounded-2xl p-6 flex justify-between items-center border border-white/20">
          <div>
            <h1 className="text-3xl font-bold text-white drop-shadow">
              Dashboard Restaurant
            </h1>
            <p className="text-white/80">
              Bienvenue sur votre espace de gestion
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white border border-white/30">
              🔔 3 Notifications
            </div>
            <button
              onClick={() => navigate("/login")}
              className="bg-red-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Déconnexion
            </button>
            <div className="w-12 h-12 rounded-full bg-red-600/80 text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="min-h-[80vh] pt-20 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Gérez votre restaurant comme un pro
          </h2>
          <p className="text-xl max-w-2xl mb-8 text-white/90 drop-shadow">
            Suivez les commandes, gérez les menus et analysez vos performances
            depuis une seule plateforme.
          </p>
          <button className="bg-white/20 backdrop-blur-sm text-white border border-white/40 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 hover:scale-105 transition">
            Découvrir
          </button>
        </section>

        {/* ── Cartes de stats ── */}
        <section className="py-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-red-500/30 backdrop-blur-sm flex items-center justify-center mb-4">
                <FaShoppingCart className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">{commandes}</h3>
              <p className="text-white/80">Commandes aujourd'hui</p>
              <p className="text-sm text-green-300 font-medium mt-2">▲ +12 % par rapport à hier</p>
              <button
                onClick={() => setShowModal(true)}
                className="mt-3 bg-red-600/70 backdrop-blur-sm text-white px-4 py-2 rounded hover:bg-red-700 hover:scale-105 transition"
              >
                Nouvelle commande
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-500/30 backdrop-blur-sm flex items-center justify-center mb-4">
                <FaMoneyBillWave className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">425 000 FCFA</h3>
              <p className="text-white/80">Revenus du jour</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-500/30 backdrop-blur-sm flex items-center justify-center mb-4">
                <FaClock className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">17 min</h3>
              <p className="text-white/80">Temps moyen de préparation</p>
            </div>
          </div>
        </section>

        {/* ── Tableau ── */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-bold mb-6 text-white drop-shadow">Commandes récentes</h2>

          <div className="flex gap-3 mb-6 flex-wrap">
            {["Tous", "Livrée", "Préparation", "En attente"].map((s) => (
              <button
                key={s}
                onClick={() => setFiltre(s)}
                className={`px-4 py-2 rounded-full transition ${
                  filtre === s
                    ? "bg-red-600/80 text-white backdrop-blur-sm"
                    : "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="🔍 Rechercher un client..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="w-full mb-6 p-3 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
            <div className="grid grid-cols-4 bg-black/40 backdrop-blur-sm text-white p-5 font-semibold tracking-wide">
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
                  className="grid grid-cols-4 p-4 border-b border-white/10 hover:bg-white/10 hover:scale-[1.01] hover:shadow-lg transition-all duration-300 cursor-pointer text-white"
                >
                  <p>#{commande.id}</p>
                  <p>{commande.client}</p>
                  <p>{commande.plat}</p>
                  <span
                    className={
                      commande.statut === "Livrée"
                        ? "px-3 py-1 rounded-full bg-green-500/30 text-green-200 font-medium text-sm w-fit"
                        : commande.statut === "Préparation"
                        ? "px-3 py-1 rounded-full bg-yellow-500/30 text-yellow-200 font-medium text-sm w-fit"
                        : "px-3 py-1 rounded-full bg-red-500/30 text-red-200 font-medium text-sm w-fit"
                    }
                  >
                    {commande.statut}
                  </span>
                </div>
              ))}
          </div>
        </section>

        {notification && (
          <div className="fixed top-24 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
            ✅ Nouvelle commande enregistrée
          </div>
        )}

        {/* ── Alertes ── */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-bold mb-6 text-white drop-shadow">Alertes</h2>
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

        {/* ── Modal ── */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-96 rounded-xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">Nouvelle commande</h2>
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
                  setTimeout(() => setNotification(false), 3000);
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

        <footer className="bg-black/40 backdrop-blur-sm text-white text-center py-6">
          ©️ 2026 FoodManager - Gestion intelligente de restaurant
        </footer>
      </div>
    </>
  );
}

export default Dashboard;