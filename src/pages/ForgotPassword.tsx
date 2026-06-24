import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Réinitialisation
        </h1>

        <input
          type="email"
          placeholder="Adresse e-mail"
          className="w-full p-3 border rounded-lg mb-4"
        />

        <button
          className="w-full bg-red-600 text-white py-3 rounded-lg"
        >
          Envoyer le lien
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-center mt-4 text-red-600 cursor-pointer hover:underline"
        >
          Retour à la connexion
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;