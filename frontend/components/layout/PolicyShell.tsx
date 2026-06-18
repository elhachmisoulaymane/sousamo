export function PolicyShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-serif text-4xl text-espresso-900">{title}</h1>
      {updated && (
        <p className="mt-2 text-sm text-espresso-700/60">Ultimo aggiornamento: {updated}</p>
      )}
      <div className="prose-nellia mt-8 space-y-4 text-espresso-800 [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-espresso-900 [&_p]:leading-relaxed">
        {children}
      </div>
    </div>
  );
}
