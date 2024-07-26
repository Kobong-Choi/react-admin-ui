import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={params.row.img || "/noavatar.png"} alt="" />;
        </div>
      );
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New user</button>
      </div>
      {/* slug: URL이나 데이터베이스 등의 항목을 식별하는 데 사용되는 짧고 간결한 텍스트 문자열을 의미합니다. */}
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
