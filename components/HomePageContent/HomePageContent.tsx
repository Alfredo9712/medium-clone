import { NextPage } from "next";
import Header from "../Header/Header";

import styled from "./HomePageContent.module.scss";

interface Props {}

const HomePageContent: NextPage<Props> = () => {
  return (
    <div className={styled.layout}>
      <Header />
    </div>
  );
};

export default HomePageContent;
