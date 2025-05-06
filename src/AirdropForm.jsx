export default function AirdropForm() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">🚀 Airdrop Alerts Signup</h1>
        <p className="text-center mb-6">
          Get notified about token airdrops, research grant opportunities, and DAO voting.
        </p>

        {/* SMI Logo Branding */}
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            src="/show-me-innovation-token/SMI-logo.png"
            alt="SMI Token Logo"
            className="h-40 w-auto mb-4"
          />
          <span className="text-xl font-semibold text-gray-800">
            SMI Airdrop Registration
          </span>
        </div>

        {/* Embedded Google Form */}
        <div className="w-full h-[1800px] max-w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfQ6DFnMMAwhH_9dtRwQTl7keNPhFO7dLphkPn4BHDQ4aD1oA/viewform?embedded=true"
            title="SMI Airdrop Signup Form"
            width="100%"
            height="100%"
            className="border-none w-full h-full"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </main>
  );
}
