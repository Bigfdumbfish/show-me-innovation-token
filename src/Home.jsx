import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 px-4">
        <img
          src="/show-me-innovation-token/SMI-logo.png"
          alt="SMI Token Logo"
          className="mx-auto mb-6 h-24"
        />
        <h1 className="text-4xl font-bold mb-4">
          Show-Me Innovation Token (SMI)
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Powering Missouri-based STEM research, advanced materials, and
          innovation through decentralized funding and transparent governance.
        </p>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Token Overview
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-lg font-medium">Total Supply</h3>
              <p>1 Trillion (1,000,000,000,000)</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-lg font-medium">Blockchain</h3>
              <p>Polygon (MATIC)</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-lg font-medium">Token Utility</h3>
              <p>
                DAO governance, grant funding, research rewards, and STEM
                engagement.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-lg font-medium">Explorer</h3>
              <a
                href="https://polygonscan.com/token/0xee4e0d524f3c1af3346346ff4d64b13f64521335"
                className="text-blue-600 underline"
                target="_blank"
                rel="noreferrer"
              >
                View on PolygonScan
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <p className="mb-6">
            SMI Tokens are distributed to supporters and researchers. Token
            holders participate in governance via DAO tools like Tally or
            Aragon. Proposals for STEM funding are submitted and voted on by the
            community.
          </p>
          <Link
            to="/airdrop"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700"
          >
            Join the Airdrop
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Show-Me Innovation Token. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
