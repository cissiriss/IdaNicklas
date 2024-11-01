import { useEffect, useMemo, useRef, useState } from "react";

interface Pages {
  label: string;
  key: string;
}

export const DropDown = () => {
  const pageViews: Pages[] = useMemo(() => {
    return [
      {
        label: "Start",
        key: "home",
      },
      { label: "Vigsel", key: "wedding" },

      {
        label: "Middag & Fest",
        key: "party",
      },
      {
        label: "Bra att veta",
        key: "info",
      },
      {
        label: "Gåvor",
        key: "gifts",
      },
      {
        label: "Tal",
        key: "speaches",
      },
      {
        label: "OSA",
        key: "osa",
      },
    ];
  }, []);

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
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <header>
        <nav>
          <input
            className="menu-button"
            type="button"
            value="Meny"
            onClick={toggleDropdown}
          />
          {isOpen && (
            <div className="dropdown-container">
              <ul className="drop-down">
                {pageViews.map((view) => (
                  <li key={view.key}>
                    <a href={`#${view.key}`}>{view.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
