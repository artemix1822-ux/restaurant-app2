import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";


function Login() {
  const navigate = useNavigate();
  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
<div className="text-center mb-4">
  <h2 className="text-5xl"></h2>
</div>
<h1 className="text-4xl font-bold text-red-600">
  FoodManager
</h1>

<p className="text-gray-500 mt-2 mb-6">
  Gérez votre restaurant simplement et efficacement
</p>
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Connexion
        </h1>

        <div className="relative mb-4">
  <FaEnvelope className="absolute left-3 top-4 text-gray-400" />

  <input
    type="email"
    placeholder="Adresse e-mail"
    className="w-full pl-10 p-3 border rounded-lg"
  />
</div>

       <div className="relative mb-4">
  <FaLock className="absolute left-3 top-4 text-gray-400" />

  <input
    type="password"
    placeholder="Mot de passe"
    className="w-full pl-10 p-3 border rounded-lg"
  />
</div>
<button
  onClick={() => navigate("/dashboard")}
  className="w-full bg-red-600 text-white py-3 rounded-lg"
>
  Se connecter
</button>
<div className="mt-4 text-center">

  <p
    onClick={() => navigate("/register")}
    className="text-red-600 cursor-pointer hover:underline"
  >
    Créer un compte
  </p>

  <p
    onClick={() => navigate("/forgot-password")}
    className="text-gray-600 cursor-pointer hover:underline mt-2"
  >
    Mot de passe oublié ?
  </p>

</div>

      </div>

    </div>
  );
}

export default Login;