import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineMoreVert } from "react-icons/md";
import "../../styles/TableBadges.css";
import { Link } from "react-router-dom";
import Modal from "../modal/index";

export default function TableAdminDropdown({ viaticoID, status }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [modalRechazo, mostrarModalRechazo] = React.useState(false);
  const [modalPagado, mostrarModalPagado] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modal, mostrarModal] = React.useState(false);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MdOutlineMoreVert id="icon" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Ver solicitud</MenuItem>
        {status === "Rechazado" && (
          <MenuItem onClick={() => mostrarModal(!modal)}>
            Ver motivo de rechazo
          </MenuItem>
        )}
        {status === "Pagado" && (
          <>
            <MenuItem
              onClick={handleClose}
              as={Link}
              to={"/admin/hexpediente/" + viaticoID}
            >
              Ver expediente
            </MenuItem>
            <MenuItem onClick={() => mostrarModalPagado(!modalPagado)}>
              Mostrar pago
            </MenuItem>
          </>
        )}
        {status === "Aprobado" && (
          <>
            <MenuItem
              onClick={handleClose}
              as={Link}
              to={"/admin/hexpediente/" + viaticoID}
            >
              Ver expediente
            </MenuItem>
          </>
        )}
      </Menu>

      <Modal
        estado={modalRechazo}
        cambiarEstado={mostrarModalRechazo}
        motivoRechazo={true}
        id={viaticoID}
      />

      <Modal
        estado={modalPagado}
        cambiarEstado={mostrarModalPagado}
        mostrarReferencia={true}
        id={viaticoID}
      />
    </div>
  );
}
