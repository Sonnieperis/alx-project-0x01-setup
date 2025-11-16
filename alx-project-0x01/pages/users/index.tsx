import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";

const UsersPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <p className="mb-4">This is a placeholder users page.</p>
        <div className="flex gap-4">
          <Button title="Add User" />
          <Button title="Invite" className="bg-green-600 hover:bg-green-700" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;
