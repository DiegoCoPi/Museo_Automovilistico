import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import "./welcome.css"

export function Welcome() {
  return (
    <main className="main">
      <h1 className="title">¡Bienvenidos al museo del Automovil!</h1>
      <p className="paragraph">
        Un lugar en donde puede conocer el origen de este importante invento a la humanidad desde el aporte cotidiano 
        pasando por el papel fundamental en la revolucioón industrial, en la eficiencia y efectividad en otras industrias, 
        necesidades cotidianas hiser parte escencial de los lujos en altas socieday en el deporte y entretenimiento.
      </p>
        <h2 className="second_title">Aqui te mostramos algunas de las secciones que nuestros visitantes van</h2>
      <section className="flex flex-col items-center justify-center pt-16 pb-4 text-center">
        <section>
          <p img="">Si eres amante de la época de los 70’s a los 90’s esta sección es para ti en donde tenemos los mejores e iconicos ejemplares. ¡Animate!</p>
        </section>
      </section>
    </main>
  );
}

