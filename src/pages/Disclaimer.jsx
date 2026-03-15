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
            Important information about this site and VA representation.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-8 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-700 leading-relaxed">
            <p>
              The information provided on this website is for <strong>educational purposes only</strong>. Ryan Buckingham is not an accredited VSO, claims agent, or attorney and does not prepare, file, or charge for VA disability claims.
            </p>
            <p className="mt-4">
              Veterans seeking assistance with filing claims should work with accredited representatives through VA.gov or recognized veteran service organizations.
            </p>
          </div>
          <a
            href="https://www.va.gov/get-help-from-accredited-representative/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center min-h-[48px] gap-2 rounded-lg px-6 py-3 text-base font-semibold bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-offset-2 transition-colors"
          >
            Find accredited representatives at VA.gov
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </div>
  )
}
