import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { PrismaClient } from "@prisma/client";
import Main from "../components/Main";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const breeds = await prisma.breed.findMany();
  console.log;
  return {
    props: { breeds },
  };
}

export default function Home(props) {
  return (
    <div>
      <Header />
      <Main breeds={props.breeds} />
    </div>
  );
}
