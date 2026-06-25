import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaKey } from "react-icons/fa";
import { useState } from "react";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSend = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setError("Adresse e-mail invalide ❌");
      return;
    }
    setSent(true);
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">

      {/* Cercles décoratifs bleutés */}
      <div className="absolute top-[-80px] right-[-80px] w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-[-80px] left-[-80px] w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-md p-10">

        {/* Icône */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 mb-4">
            <FaKey className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Mot de passe oublié ?</h1>
          <p className="text-white/50 text-sm mt-2 text-center">
            Entrez votre e-mail pour recevoir un lien de réinitialisation
          </p>
        </div>

        {/* Succès */}
        {sent ? (
          <div className="bg-green-500/20 border border-green-500/40 text-green-300 text-sm text-center px-4 py-4 rounded-xl mb-6">
            ✅ Lien envoyé ! Vérifiez votre boîte mail.
          </div>
        ) : (
          <>
            {/* Erreur */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/40 text-red-300 text-sm text-center px-4 py-3 rounded-xl mb-4">
                {error}
              </div>
            )}

            {/* Input email */}
            <div className="relative mb-6">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="email"
                placeholder="Adresse e-mail"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className="w-full bg-white/10 border border-white/10 text-white placeholder-white/30 pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Bouton */}
            <button
              onClick={handleSend}
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30"
            >
              Envoyer le lien
            </button>
          </>
        )}

        {/* Retour */}
        <div
          onClick={() => navigate("/login")}
          className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm cursor-pointer hover:text-white/70 transition"
        >
          <FaArrowLeft className="text-xs" />
          Retour à la connexion
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;