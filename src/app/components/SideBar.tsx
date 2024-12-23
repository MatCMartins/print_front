import React from "react";
import { Sidebar } from "primereact/sidebar";

interface Notification {
  notification_id: string;
  title: string;
  creation_date: number;
  description: string;
  has_seen: boolean;
}

interface SidebarNotificacoesProps {
  visible: boolean;
  onHide: () => void;
  notification: any;
}

const SidebarNotificacoes: React.FC<SidebarNotificacoesProps> = ({
  visible,
  onHide,
  notification,
}) => {
  return (
    <Sidebar visible={visible} onHide={onHide} fullScreen>
      {notification ? (
        <>
          <h2>{notification.title}</h2>
          <p>{new Date(notification.creation_date).toLocaleString()}</p>
          <p>{notification.description}</p>
        </>
      ) : (
        <p>Nenhuma notificação selecionada.</p>
      )}
    </Sidebar>
  );
};

export default SidebarNotificacoes;
