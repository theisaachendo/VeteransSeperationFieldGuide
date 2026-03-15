export default function ComingSoonModal({ isOpen, onClose }) {
  if (!isOpen) return null
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
    >
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden
        onClick={onClose}
      />
      <div className="relative rounded-xl bg-white p-8 shadow-xl max-w-sm w-full text-center">
        <h2 id="coming-soon-title" className="text-xl font-bold text-[var(--color-navy)]">
          Coming soon
        </h2>
        <p className="mt-3 text-neutral-600">
          Rate My VSO is on the way. Check back later.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 rounded-lg px-5 py-2.5 text-sm font-semibold bg-[var(--color-navy)] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-offset-2"
        >
          Close
        </button>
      </div>
    </div>
  )
}
