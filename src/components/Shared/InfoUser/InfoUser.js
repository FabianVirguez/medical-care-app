import { useAuth } from "@/hooks";
import styles from "./infoUser.module.scss";

export function InfoUser() {
  const { user } = useAuth();
  return (
    <>
      {user && (
        <div className={styles.infoUserContent}>
          <h3>Información del paciente</h3>
          <div className={styles.infoUser}>
            <div className={styles.item}>
              <label>Nombre:</label>
              <span>
                {user.firstname
                  ? `${user.firstname} ${user.lastname}`
                  : user.username}
              </span>
            </div>
            <div className={styles.item}>
              <label>Edad:</label>
              <span>35 años</span>
            </div>
            <div className={styles.item}>
              <label>Sexo:</label>
              <span>Masculino</span>
            </div>
            <div className={styles.item}>
              <label>Correo:</label>
              <span>{user.email}</span>
            </div>
            <div className={styles.item}>
              <label>Teléfono:</label>
              <span>3123423421</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
