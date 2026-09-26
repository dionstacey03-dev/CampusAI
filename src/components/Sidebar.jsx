import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>◈</span>
        <h2>CampusAI</h2>
      </div>

      <nav>
        <NavLink to="/" end>
          🏠 Dashboard
        </NavLink>

        <NavLink to="/subjects">
          📚 Subjects
        </NavLink>

        <NavLink to="/study-planner">
          📅 Study Planner
        </NavLink>

        <NavLink to="/assignments">
          📝 Assignments
        </NavLink>

        <NavLink to="/exams">
          🎓 Exams
        </NavLink>

        <NavLink to="/studylens">
          📄 StudyLens
        </NavLink>

        <NavLink to="/ai-assistant">
          🤖 AI Assistant
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <button type="button">⚙️ Settings</button>
      </div>
    </aside>
  );
}

export default Sidebar;