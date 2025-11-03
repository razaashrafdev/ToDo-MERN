import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./App.module.css";

// Import modern icons (you'll need to install these)
import { Plus, Save, Trash2, Edit2, X, RefreshCw } from "lucide-react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingID, setEditingID] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Fetch all todos from backend
  async function fetchTodos() {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/todo/allTodo");
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  // ✅ Add or update todo
  const addTodo = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      if (editingID !== null) {
        await axios.put(
          `http://localhost:5000/api/todo/update/${editingID}`,
          { todo: input }
        );
        setEditingID(null);
      } else {
        await axios.post("http://localhost:5000/api/todo/create", {
          todo: input,
        });
      }
      await fetchTodos();
      setInput("");
    } catch (err) {
      console.error("Error saving todo:", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Delete one todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todo/delete/${id}`);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err.message);
    }
  };

  // ✅ Edit existing todo
  const editTodo = (index, id) => {
    setInput(todos[index].todo);
    setEditingID(id);
  };

  // ✅ Cancel editing
  const cancelEdit = () => {
    setInput("");
    setEditingID(null);
  };

  // ✅ Delete all todos
  const deleteAll = async () => {
    if (!todos.length || !window.confirm("Are you sure you want to delete all todos?")) return;
    
    try {
      await axios.delete("http://localhost:5000/api/todo/deleteAll");
      setTodos([]);
    } catch (err) {
      console.error("Error deleting all todos:", err.message);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          <span className={styles.icon}>📝</span>
          Task Manager
        </h1>
        <p className={styles.subtitle}>A minimalist todo app for developers</p>
      </header>

      <div className={styles.inputSection}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={input}
            placeholder={editingID ? "Edit your task..." : "What needs to be done?"}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo();
              if (e.key === "Escape") cancelEdit();
            }}
            disabled={isLoading}
          />
          {editingID && (
            <button onClick={cancelEdit} className={styles.cancelBtn} title="Cancel">
              <X size={16} />
            </button>
          )}
        </div>
        
        <div className={styles.actionButtons}>
          <button 
            onClick={addTodo} 
            className={`${styles.primaryBtn} ${editingID ? styles.saveBtn : styles.addBtn}`}
            disabled={!input.trim() || isLoading}
          >
            {isLoading ? (
              <RefreshCw size={18} className={styles.spinner} />
            ) : editingID ? (
              <Save size={18} />
            ) : (
              <Plus size={18} />
            )}
            {editingID ? "Save" : "Add"}
          </button>
          
          {todos.length > 0 && (
            <button 
              onClick={deleteAll} 
              className={styles.clearAllBtn}
              disabled={isLoading}
              title="Clear all tasks"
            >
              <Trash2 size={18} />
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className={styles.todoSection}>
        {isLoading && todos.length === 0 ? (
          <div className={styles.loadingState}>
            <RefreshCw size={24} className={styles.spinner} />
            <p>Loading tasks...</p>
          </div>
        ) : todos.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🎯</div>
            <h3>No tasks yet</h3>
            <p>Add a task above to get started</p>
          </div>
        ) : (
          <>
            <div className={styles.stats}>
              <span className={styles.count}>{todos.length} task{todos.length !== 1 ? 's' : ''}</span>
            </div>
            <ul className={styles.todoList}>
              {todos.map((todo, index) => (
                <li key={todo._id} className={styles.todoItem}>
                  <span className={styles.todoText}>{todo.todo}</span>
                  <div className={styles.actions}>
                    <button
                      onClick={() => editTodo(index, todo._id)}
                      className={styles.editBtn}
                      title="Edit task"
                      disabled={isLoading}
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => deleteTodo(todo._id)}
                      className={styles.deleteBtn}
                      title="Delete task"
                      disabled={isLoading}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;