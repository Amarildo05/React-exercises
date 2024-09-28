import { Table, Modal, Button, Input } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Crud() {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [isValidated, setIsValidated] = useState("");

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Is Validated",
      dataIndex: "is_validated",
      key: "is_validated",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div>
          <Button
            style={{ margin: "5px" }}
            type="primary"
            onClick={() => handleShowModal(record)}
          >
            Edit
          </Button>
          <Button
            style={{ margin: "5px" }}
            color="danger"
            variant="solid"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  //   Show the Modal
  function handleShowModal(item) {
    if (item) {
      // Edit user
      setEditingItem(item);
      setName(item.name);
      setRole(item.role);
      setIsValidated(item.is_validated);
      setCreatingUser(false);
    } else {
      // Create user
      setEditingItem(null);
      setName("");
      setRole("");
      setIsValidated("");
      setCreatingUser(true);
    }
    setIsModalVisible(true);
  }

  //   Hide the Modal
  function handleCancel() {
    setIsModalVisible(false);
    setEditingItem(null);
    setName("");
    setRole("");
    setIsValidated("");
  }

  //   Edit User fileds
  async function handleEdit() {
    const updatedUser = { name, role, is_validated: isValidated };
    try {
      await axios.put(
        `http://localhost:3000/users/${editingItem.id}`,
        updatedUser
      );
      const updatedData = data.map((item) =>
        item.id === editingItem.id ? { ...item, ...updatedUser } : item
      );
      setData(updatedData);
      setIsModalVisible(false);
      setEditingItem(null);
      setName("");
      setRole("");
      setIsValidated("");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  // Create user
  async function handleCreate() {
    const newUser = { name, role, is_validated: isValidated };
    try {
      const response = await axios.post(`http://localhost:3000/users`, newUser);
      setData([...data, response.data]);
      handleCancel();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  //   Delete a user
  function handleDelete(id) {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          await axios.delete(`http://localhost:3000/users/${id}`);
          setData(data.filter((item) => item.id !== id));
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      },
    });
  }

  //   Get Users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Button
        type="primary"
        onClick={() => handleShowModal(null)}
        style={{ marginBottom: "20px", marginLeft: "10px" }}
      >
        Create New User
      </Button>

      <Table
        style={{ width: "100%" }}
        pagination={false}
        columns={columns}
        dataSource={data}
      />

      <Modal
        title={creatingUser ? "Create New User" : "Edit User"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <div>
          <div>
            <label>Name:</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Role:</label>
            <Input value={role} onChange={(e) => setRole(e.target.value)} />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Is Validated:</label>
            <Input
              value={isValidated}
              onChange={(e) => setIsValidated(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              type="primary"
              onClick={creatingUser ? handleCreate : handleEdit}
            >
              {creatingUser ? "Create" : "Save"}
            </Button>
            <Button style={{ marginLeft: "10px" }} onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
