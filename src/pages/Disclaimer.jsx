export default function Disclaimer() {
  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            Disclaimer
          </h1>
          <p className="mt-3 text-lg text-neutral-300">
            Important information about coaching services.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-8 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-700 leading-relaxed">
            <p>
              The information provided on this website is for <strong>educational purposes only</strong>.
              Ryan Buckingham Coaching is not therapy, medical care, legal advice, or
              financial advice.
            </p>
            <p className="mt-4">
              Coaching results vary by person and depend on your effort, consistency, and
              follow-through. You are responsible for your own decisions, actions, and outcomes.
            </p>
            <p className="mt-4">
              If you are experiencing a mental health crisis, contact emergency services or a
              licensed professional in your area immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
