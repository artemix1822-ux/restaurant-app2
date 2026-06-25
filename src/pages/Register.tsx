import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUtensils, FaUser } from "react-icons/fa";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!nom || !email || !password) {
      setError("Veuillez remplir tous les champs ❌");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Adresse e-mail invalide ❌");
      return;
    }
    if (password.length < 6) {
      setError("Le mot de passe doit faire au moins 6 caractères ❌");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">

      {/* Cercles décoratifs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-red-600 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-orange-500 rounded-full opacity-20 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-md p-10">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <FaUtensils className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">FoodManager</h1>
          <p className="text-white/50 text-sm mt-1">Créez votre espace en quelques secondes</p>
        </div>

        <h2 className="text-xl font-semibold text-white mb-6 text-center">
          Inscription
        </h2>

        {/* Erreur */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/40 text-red-300 text-sm text-center px-4 py-3 rounded-xl mb-4">
            {error}
          </div>
        )}

        {/* Nom */}
        <div className="relative mb-4">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Nom complet"
            value={nom}
            onChange={(e) => { setNom(e.target.value); setError(""); }}
            className="w-full bg-white/10 border border-white/10 text-white placeholder-white/30 pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            className="w-full bg-white/10 border border-white/10 text-white placeholder-white/30 pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        {/* Mot de passe */}
        <div className="relative mb-6">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="password"
            placeholder="Mot de passe (min. 6 caractères)"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
            className="w-full bg-white/10 border border-white/10 text-white placeholder-white/30 pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        {/* Bouton */}
        <button
          onClick={handleRegister}
          className="w-full bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/30"
        >
          S'inscrire
        </button>

        {/* Lien login */}
        <div className="mt-6 text-center">
          <p
            onClick={() => navigate("/login")}
            className="text-white/60 text-sm cursor-pointer hover:text-white transition"
          >
            Déjà un compte ?{" "}
            <span className="text-red-400 font-semibold hover:underline">Se connecter</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;