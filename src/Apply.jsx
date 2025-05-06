export default function Apply() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">📄 Grant Application</h1>
        <p className="text-center mb-6">
          Submit your STEM research proposal for funding consideration by the SMI community.
        </p>
        <div className="w-full h-[1400px] max-w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe_fake_grant_form_id/viewform?embedded=true"
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