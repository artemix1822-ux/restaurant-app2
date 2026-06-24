import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Inscription
        </h1>

        <input
          type="text"
          placeholder="Nom complet"
          className="w-full p-3 border rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Adresse e-mail"
          className="w-full p-3 border rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-3 border rounded-lg mb-4"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-red-600 text-white py-3 rounded-lg"
        >
          S'inscrire
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-center mt-4 text-red-600 cursor-pointer hover:underline"
        >
          Déjà un compte ? Se connecter
        </p>

      </div>

    </div>
  );
}

export default Register;