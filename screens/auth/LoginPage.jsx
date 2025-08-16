
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        setSuccess("Login realizado com sucesso!");
      } else {
        setError("Usuário ou senha inválidos.");
      }
    } catch (e) {
      setError("Erro de conexão. Tente novamente.");
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-b from-blue-100 to-blue-300 px-6">
      <View className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <Text className="text-3xl font-bold text-blue-700 mb-6 text-center">Entrar</Text>
        <TextInput
          className="border border-blue-300 rounded-lg px-4 py-3 mb-4 text-base bg-blue-50"
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          className="border border-blue-300 rounded-lg px-4 py-3 mb-4 text-base bg-blue-50"
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error ? (
          <Text className="text-red-500 mb-2 text-center">{error}</Text>
        ) : null}
        {success ? (
          <Text className="text-green-600 mb-2 text-center">{success}</Text>
        ) : null}
        <TouchableOpacity
          className="bg-blue-600 rounded-lg py-3 mt-2"
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-lg font-semibold text-center">Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
