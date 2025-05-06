export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 flex items-center justify-center">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold mb-4">🎉 Thank You!</h1>
        <p className="mb-4">
          You've successfully signed up for the SMI Token Airdrop. Tokens will be distributed soon.
        </p>
        <p className="mb-6">
          Join our community on Twitter and Telegram to stay involved!
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700"
        >
          Return to Home
        </a>
      </div>
    </main>
  );
}