import React from "react";
import { Container } from "./styles";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const DefaultTemplate: React.FC<any> = (props) => {
  return (
    <Container>
      <Navbar />
      <section>{props.children}</section>
      <Footer />
    </Container>
  );
};

export default DefaultTemplate;
