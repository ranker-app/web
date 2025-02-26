// import React from "react";
// import { Container } from "./styles";

// const Navbar: React.FC<any> = (props) => {
//   return <Container>
//     Polly
//     </Container>;
// };

// export default Navbar;



import { useState } from "react";
import CreatePoll from "../PollNew/index"; 

const Navbar = () => {
  const [isPollModalOpen, setIsPollModalOpen] = useState(false);

  const openModal = () => setIsPollModalOpen(true);
  const closeModal = () => setIsPollModalOpen(false);
  const test = () =>{
    console.log('tste')
    openModal()
    console.log('teste:',isPollModalOpen)
  }

  return (
    <nav>
      <button onClick={test}>New</button> {/* Botão para abrir a modal */}
      
      {isPollModalOpen && <CreatePoll onClose={closeModal} />} {/* Renderiza a modal apenas se o estado for true */}
    </nav>
  );
};

export default Navbar;

