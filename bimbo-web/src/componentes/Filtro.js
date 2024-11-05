import { useEffect, useState, useRef, forwardRef } from "react";
import "../styles/Dropdown.css";

const Filtro = ({ updateAlmacenValues, selectedOption, setSelectedOption }) => {
  const [open, setOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [titulo, setTitulo] = useState(selectedOption);
  const dropdownRef = useRef();
  const buttonRef = useRef();
  const contentRef = useRef();

  const toggleDropdown = () => {
    if (!open) {
      const spaceRemaining =
        window.innerHeight - buttonRef.current.getBoundingClientRect().bottom;
      const contentHeight = contentRef.current.clientHeight;

      const topPosition =
        spaceRemaining > contentHeight
          ? null
          : -(contentHeight - spaceRemaining);
      setDropdownTop(topPosition);
    }
    setOpen((prevOpen) => !prevOpen);
  };

  const handleButtonClick = (text) => {
    setTitulo(text);
    updateAlmacenValues(text);
    setSelectedOption(text);
    setOpen(false);
  };

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open} titulo={titulo}/>
      <DropdownContent ref={contentRef} top={dropdownTop} open={open}>
        <button className="dropdown-item" onClick={() => handleButtonClick("Porcentaje de conteo realizado")}>Porcentaje de conteo realizado</button>
        <button className="dropdown-item" onClick={() => handleButtonClick("Cantidad de incidencias")}>Cantidad de incidencias</button>
        <button className="dropdown-item" onClick={() => handleButtonClick("Cantidad de producto en racks")}>Cantidad de producto en racks</button>
      </DropdownContent>
    </div>
  );
};

const DropdownButton = forwardRef((props, ref) => {
  const { toggle, open, titulo } = props;
  return (
    <div
      onClick={toggle}
      className={`dropdown-btn ${open ? "button-open" : ""}`}
      ref={ref}
    >
      <div className="titulo"> {titulo} </div>
      <span className="toggle-icon">{open ? "▲" : "▼"}</span>
    </div>
  );
});

const DropdownContent = forwardRef((props, ref) => {
  const { open, top, children } = props;
  return (
    <div
      className={`dropdown-content ${open ? "content-open" : ""}`}
      style={{ top: top ? `${top}px` : "100%" }}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Filtro;
