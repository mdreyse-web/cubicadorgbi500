import { useMemo, useState } from "react";
import {
  VARILLAS_ROSCADAS,
  BARRAS_ESTRIADAS,
  PROFUNDIDADES,
  pulgadasAmm,
  type FilaRendimiento,
} from "@/data/rendimiento";

const AMARILLO = "#FFC81F";
const NEGRO = "#1A1A1A";

type Modo = "varilla" | "estriada";

function App() {
  const [modo, setModo] = useState<Modo>("varilla");
  const tabla: FilaRendimiento[] = modo === "varilla" ? VARILLAS_ROSCADAS : BARRAS_ESTRIADAS;

  const [diametro, setDiametro] = useState<string>(VARILLAS_ROSCADAS[0].d);
  const [prof, setProf] = useState<number>(4); // pulgadas
  const [cantidad, setCantidad] = useState<string>("");

  const fila = tabla.find((f) => f.d === diametro) ?? tabla[0];
  const idxProf = PROFUNDIDADES.indexOf(prof);
  const porCartucho = fila.vals[idxProf];

  const numCantidad = parseInt(cantidad, 10);
  const cartuchos = useMemo(() => {
    if (!numCantidad || numCantidad <= 0) return null;
    return Math.ceil(numCantidad / porCartucho);
  }, [numCantidad, porCartucho]);

  const cambiarModo = (m: Modo) => {
    setModo(m);
    setDiametro((m === "varilla" ? VARILLAS_ROSCADAS : BARRAS_ESTRIADAS)[0].d);
  };

  return (
    <div className="min-h-screen bg-neutral-100" style={{ color: NEGRO }}>
      {/* Header */}
      <header style={{ backgroundColor: NEGRO }} className="shadow-md">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-4">
          <img
            src="/logo-ingefix.png"
            alt="INGEFIX"
            className="h-10 w-auto rounded bg-white px-2 py-1"
          />
          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-white sm:text-2xl">
              Calculadora de Perforaciones
            </h1>
            <p className="text-xs sm:text-sm" style={{ color: AMARILLO }}>
              Anclaje químico GBI500SD · Cartucho 400 ml
            </p>
          </div>
        </div>
        <div className="h-1.5" style={{ backgroundColor: AMARILLO }} />
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        {/* Selector de modo */}
        <div className="mb-6 grid grid-cols-2 overflow-hidden rounded-xl border-2 font-semibold" style={{ borderColor: NEGRO }}>
          <button
            onClick={() => cambiarModo("varilla")}
            className="px-4 py-3 text-sm transition-colors sm:text-base"
            style={
              modo === "varilla"
                ? { backgroundColor: NEGRO, color: AMARILLO }
                : { backgroundColor: "white", color: NEGRO }
            }
          >
            Varilla roscada (pulgadas)
          </button>
          <button
            onClick={() => cambiarModo("estriada")}
            className="px-4 py-3 text-sm transition-colors sm:text-base"
            style={
              modo === "estriada"
                ? { backgroundColor: NEGRO, color: AMARILLO }
                : { backgroundColor: "white", color: NEGRO }
            }
          >
            Barra estriada (mm)
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Inputs */}
          <section className="rounded-xl bg-white p-5 shadow lg:col-span-2">
            <h2 className="mb-4 border-b-2 pb-2 text-base font-bold" style={{ borderColor: AMARILLO }}>
              Datos de la instalación
            </h2>

            <label className="mb-1 block text-sm font-semibold">
              Diámetro de {modo === "varilla" ? "la varilla" : "la barra"}
            </label>
            <select
              value={diametro}
              onChange={(e) => setDiametro(e.target.value)}
              className="mb-4 w-full rounded-lg border-2 border-neutral-300 bg-white px-3 py-2.5 text-base focus:border-black focus:outline-none"
            >
              {tabla.map((f) => (
                <option key={f.d} value={f.d}>
                  {f.d}
                </option>
              ))}
            </select>

            <label className="mb-1 block text-sm font-semibold">
              Profundidad de empotramiento
            </label>
            <div className="mb-1 flex items-baseline gap-2">
              <span className="text-2xl font-bold" style={{ color: NEGRO }}>
                {prof}"
              </span>
              <span className="text-sm text-neutral-500">≈ {pulgadasAmm(prof)} mm</span>
            </div>
            <input
              type="range"
              min={2}
              max={20}
              step={1}
              value={prof}
              onChange={(e) => setProf(parseInt(e.target.value, 10))}
              className="mb-1 w-full accent-[#FFC81F]"
            />
            <div className="mb-4 flex justify-between text-[10px] text-neutral-400">
              <span>2" ({pulgadasAmm(2)} mm)</span>
              <span>20" ({pulgadasAmm(20)} mm)</span>
            </div>

            <label className="mb-1 block text-sm font-semibold">
              Perforaciones a realizar <span className="font-normal text-neutral-400">(opcional)</span>
            </label>
            <input
              type="number"
              min={1}
              inputMode="numeric"
              placeholder="Ej: 120"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              className="w-full rounded-lg border-2 border-neutral-300 px-3 py-2.5 text-base focus:border-black focus:outline-none"
            />
          </section>

          {/* Resultados */}
          <section className="lg:col-span-3">
            <div className="overflow-hidden rounded-xl shadow">
              <div className="px-5 py-3" style={{ backgroundColor: NEGRO }}>
                <h2 className="text-base font-bold text-white">Resultado</h2>
              </div>
              <div className="grid gap-4 bg-white p-5 sm:grid-cols-2">
                <div className="rounded-lg border-l-4 bg-neutral-50 p-4" style={{ borderColor: AMARILLO }}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Broca recomendada
                  </p>
                  <p className="mt-1 text-3xl font-extrabold">{fila.broca}</p>
                  <p className="text-sm text-neutral-500">
                    para {modo === "varilla" ? "varilla" : "barra"} {fila.d}
                  </p>
                </div>
                <div className="rounded-lg border-l-4 bg-neutral-50 p-4" style={{ borderColor: AMARILLO }}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Rendimiento por cartucho
                  </p>
                  <p className="mt-1 text-3xl font-extrabold">{porCartucho}</p>
                  <p className="text-sm text-neutral-500">
                    perforaciones a {prof}" ({pulgadasAmm(prof)} mm)
                  </p>
                </div>
              </div>

              {cartuchos !== null && (
                <div className="mx-5 mb-5 rounded-lg p-4" style={{ backgroundColor: AMARILLO }}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold">
                      Para {numCantidad.toLocaleString("es-CL")} perforaciones necesitas:
                    </p>
                    <p className="text-3xl font-extrabold">
                      {cartuchos} cartucho{cartuchos > 1 ? "s" : ""} GBI500SD
                    </p>
                  </div>
                  <p className="mt-1 text-xs">
                    Rinden hasta {(cartuchos * porCartucho).toLocaleString("es-CL")} perforaciones
                    (sobran {(cartuchos * porCartucho - numCantidad).toLocaleString("es-CL")}).
                  </p>
                </div>
              )}

              <p className="px-5 pb-4 text-xs text-neutral-400">
                Rendimientos teóricos del cartucho de 400 ml según tablas internas Ingefix.
                Considerar desperdicio por purga inicial y limpieza de perforación.
              </p>
            </div>
          </section>
        </div>

        {/* Tabla de referencia */}
        <section className="mt-8">
          <h2 className="mb-3 text-base font-bold">
            Tabla de referencia — {modo === "varilla" ? "varillas roscadas" : "barras estriadas"}
          </h2>

          {/* Desktop */}
          <div className="hidden overflow-x-auto rounded-xl bg-white shadow md:block">
            <table className="w-full border-collapse text-center text-sm">
              <thead>
                <tr style={{ backgroundColor: NEGRO }} className="text-white">
                  <th className="px-3 py-2 text-left">{modo === "varilla" ? "Varilla" : "Barra"}</th>
                  <th className="px-3 py-2 text-left">Broca</th>
                  {PROFUNDIDADES.map((p) => (
                    <th
                      key={p}
                      className="px-2 py-2"
                      style={p === prof ? { backgroundColor: AMARILLO, color: NEGRO } : undefined}
                    >
                      {p}"
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tabla.map((f) => (
                  <tr key={f.d} className="border-t border-neutral-200">
                    <td
                      className="px-3 py-1.5 text-left font-semibold"
                      style={f.d === fila.d ? { backgroundColor: "#FFF3C4" } : undefined}
                    >
                      {f.d}
                    </td>
                    <td
                      className="px-3 py-1.5 text-left"
                      style={f.d === fila.d ? { backgroundColor: "#FFF3C4" } : undefined}
                    >
                      {f.broca}
                    </td>
                    {f.vals.map((v, i) => (
                      <td
                        key={i}
                        className="px-2 py-1.5"
                        style={
                          f.d === fila.d && i === idxProf
                            ? { backgroundColor: AMARILLO, fontWeight: 800 }
                            : f.d === fila.d
                              ? { backgroundColor: "#FFF3C4" }
                              : i === idxProf
                                ? { backgroundColor: "#FFF9E0" }
                                : undefined
                        }
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: tarjetas */}
          <div className="grid gap-3 md:hidden">
            {tabla.map((f) => (
              <div
                key={f.d}
                className="rounded-xl bg-white p-4 shadow"
                style={f.d === fila.d ? { outline: `2px solid ${AMARILLO}` } : undefined}
              >
                <div className="mb-2 flex items-baseline justify-between">
                  <p className="font-bold">{f.d}</p>
                  <p className="text-sm text-neutral-500">Broca {f.broca}</p>
                </div>
                <div className="grid grid-cols-5 gap-1 text-center text-xs">
                  {PROFUNDIDADES.map((p, i) => (
                    <div
                      key={p}
                      className="rounded px-1 py-1"
                      style={
                        f.d === fila.d && i === idxProf
                          ? { backgroundColor: AMARILLO, fontWeight: 800 }
                          : { backgroundColor: "#F5F5F5" }
                      }
                    >
                      <span className="block text-[10px] text-neutral-400">{p}"</span>
                      {f.vals[i]}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-10 border-t border-neutral-300 pt-4 text-xs text-neutral-500">
          <p>
            <strong>Nota:</strong> valores según tablas internas Ingefix para anclaje químico
            GBI500SD (cartucho 400 ml). El valor de barra estriada φ10 mm a 20" venía como 16 en la
            planilla original (inconsistente con la serie decreciente) y se corrigió a 9.
          </p>
          <p className="mt-2">
            GB Ingeniería en Fijaciones S.A. ·{" "}
            <a href="https://www.ingefix.cl" className="font-semibold underline" style={{ color: NEGRO }}>
              www.ingefix.cl
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
