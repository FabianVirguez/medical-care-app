import { useEffect, useState } from "react";
import { Icon, Table } from "semantic-ui-react";
import Pagination from "semantic-ui-react-button-pagination";
import { BasicLayout } from "@/layouts";
import { Seo, Separator, InfoUser } from "@/components/Shared";
import { useAuth } from "@/hooks";
import { Appointment } from "@/api";

import styles from "./procedures.module.scss";

const appointmentCtrl = new Appointment();

export default function Procedures() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await appointmentCtrl.getByUser({
          params: {
            user: user.id,
          },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAppointments();
  }, [user]);

  return (
    <>
      <Seo title="Resultados procedimientos y examenes | Medical Care" />

      <BasicLayout isContainer relative>
        <Separator height={50} />
        <div className={styles.content}>
          <h1>Resultados procedimientos y examenes</h1>
          <p>
            En Medical Care puedes solicitar tu cita medica de manera rapida y
            sencilla.
          </p>
          <Separator height={10} />
          <hr />
          <Separator height={20} />
          <InfoUser />
          <Separator height={20} />
          <hr />
          <Separator height={20} />
          {appointments.length > 0 && (
            <>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    {Object.keys(appointments[0]?.attributes).map(
                      (value, key) => (
                        <Table.HeaderCell key={key}>{value}</Table.HeaderCell>
                      )
                    )}
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {appointments?.map((appointment, key) => (
                    <Table.Row key={key}>
                      {Object.values(appointment.attributes).map(
                        (value, key) => (
                          <Table.Cell key={key}>{value}</Table.Cell>
                        )
                      )}
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <Pagination
                defaultActivePage={1}
                currentPageColor="blue"
                floated="right"
                offset={offset}
                onClick={(e, props, offset) => setOffset(offset)}
                ellipsisItem={{
                  content: <Icon name="ellipsis horizontal" />,
                  icon: true,
                }}
                prevItem={{ content: <Icon name="angle left" />, icon: true }}
                nextItem={{ content: <Icon name="angle right" />, icon: true }}
                total={10}
                limit={5}
              />
            </>
          )}
        </div>
        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
