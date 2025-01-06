import { useEffect, useRef, useState } from "react";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <header>
        <nav>
          <input
            type="button"
            className="text-3xl bg-blue text-white rounded p-2 m-4 text-center"
            value="Meny"
            onClick={toggleDropdown}
          />
          {isOpen && (
            <ul className="dropdown-container menu bg-blue rounded-box w-56">
              <li>
                <details open>
                  <summary className="text-3xl text-white">
                    <a href="#wedding">Bröllopet</a>
                  </summary>
                  <ul>
                    <li onClick={toggleDropdown}>
                      <a className="text-2xl text-white" href="#osa">
                        OSA
                      </a>
                    </li>
                    <li onClick={toggleDropdown}>
                      <a className="text-2xl text-white" href="#hotel">
                        Hotell
                      </a>
                    </li>
                    <li onClick={toggleDropdown}>
                      <a className="text-2xl text-white" href="#map">
                        Hita hit
                      </a>
                    </li>
                    <li onClick={toggleDropdown}>
                      <a className="text-2xl text-white" href="#songs">
                        Låtförslag
                      </a>
                    </li>
                    <li onClick={toggleDropdown}>
                      <a className="text-2xl text-white" href="#gifts">
                        Gåvor
                      </a>
                    </li>
                  </ul>
                </details>
                <details open>
                  <summary className="text-3xl text-white">Program</summary>
                  <ul>
                    <li onClick={toggleDropdown}>
                      <a className="text-2xl text-white" href="#friday">
                        Uppladdning fredag
                      </a>
                    </li>
                    <li onClick={toggleDropdown}>
                      <a className="text-2xl text-white" href="#location">
                        Om området
                      </a>
                    </li>
                    <li onClick={toggleDropdown}>
                      <a
                        className="text-2xl text-white"
                        href="#wedding-ceremony"
                      >
                        Vigsel i Jonsered
                      </a>
                    </li>
                    <li onClick={toggleDropdown}>
                      <a className="text-2xl text-white" href="#party">
                        Middag och fest
                      </a>
                    </li>
                    <li onClick={toggleDropdown}>
                      <a className="text-2xl text-white" href="#speaches">
                        Tal
                      </a>
                    </li>
                    <li onClick={toggleDropdown}>
                      <a className="text-2xl text-white" href="#dresscode">
                        Klädkod
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};
