import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth] = useState("lg");
  const [fullWidth] = useState(true);
  const [openCartPanel, setOpenCartPanel] = useState(true);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };
  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  return (
    <MyContext.Provider
      value={{
        maxWidth,
        fullWidth,
        openProductDetailsModal,
        setOpenProductDetailsModal,
        handleCloseProductDetailsModal,
        openCartPanel,
        setOpenCartPanel,
        toggleCartPanel,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
