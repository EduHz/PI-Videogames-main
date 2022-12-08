export default function Pagination({ prev, next, onPreviuos, onNext }) {
    // {prev, next} son parametros para la primera y ultima pagina
    // La logica para cambiar de pagina se realiza en el componente que lo renderiza, en este capo App
    // Son recibidas por props
  
    const handlePrevius = () => {
      onPreviuos();
    };
  
    const handleNext = () => {
      onNext();
    };
  
    return (
      <nav className="my-5">
        <ul className="pagination justify-content-center">
          {prev ? (
            /* Si existe el prev , muestro el boton de prev */
            <li className="page-item">
              <button className="page-link" onClick={handlePrevius}>
                Previous
              </button>
            </li>
          ) : null}
  
          {next ? (
              /* Si existe next , muestro el boton de prev */
            <li className="page-item">
              <button className="page-link" onClick={handleNext}>
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  }