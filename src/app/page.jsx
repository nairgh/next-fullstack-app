import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/butterfly2.gif";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Showcase design ideas a better way..
        </h1>
        <p className={styles.desc}>
          Accellerate your ideas. Tech stack for the global Information  
          Technology industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} unoptimized />
      </div>
    </div>
  );
}