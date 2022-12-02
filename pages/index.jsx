import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function Home(props) {
  return (
    <div>
      <Header />
    </div>
  );
}
