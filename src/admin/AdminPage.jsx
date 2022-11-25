import React from "react";
import ReactDOM from "react-dom/client";
import AdminPanel from "./AdminPanel";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AdminPage() {
  return (
    <div>
      <AdminPanel />
    </div>
  );
}

export default AdminPage;
