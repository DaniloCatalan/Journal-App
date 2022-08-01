import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login de registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* JournalApp  */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
