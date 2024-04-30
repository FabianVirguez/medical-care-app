import { Image, Icon } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";

import { Account } from "../Account";
import { Menu } from "../Menu";
import styles from "./TopBar.module.scss";

export function TopBar(props) {
  const { isOpenSearch } = props;
  const { user } = useAuth();
  const router = useRouter();
  const goToLogin = () => router.push("/join/sign-in");
  const goToManageMedicalAppointment = () =>
    router.push("/medical-appointment/index");

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo-medical-without-bg.png" alt="logo" />
        </Link>
      </div>

      {/* <div className={styles.center}>
        <Menu isOpenSearch={isOpenSearch} />
      </div> */}

      <div className={styles.item}>
        <Link href="/contact-us">
          <Icon name="hospital" /> <span>Contactanos</span>
        </Link>
      </div>
      <div
        className={styles.item}
        onClick={user ? goToManageMedicalAppointment : goToLogin}
      >
        <Icon name="user md" />
        <span>Gestiona tus citas medicas</span>
      </div>

      <div className={styles.right}>
        <Account />
      </div>
    </div>
  );
}
