export default function Apply() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Apply for a Grant</h1>
        <p className="mb-8 text-center">
          Submit your proposal to receive funding from the Show-Me Innovation (SMI) Token DAO.
          We support STEM research, advanced materials, and community innovation in Missouri.
        </p>

        <div className="w-full max-w-full h-[2900px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSccanvx8e0aT1D90IqoUs_g-g2inMQ-OCsP3Tnf20izKkNGPg/viewform?embedded=true"
            title="SMI Grant Application Form"
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
