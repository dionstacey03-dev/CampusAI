import { useEffect, useState } from "react";

const defaultSubjects = [
  {
    id: 1,
    icon: "💻",
    name: "Programming Fundamentals",
    code: "PF",
    description: "Python programming, functions, loops and problem solving.",
    progress: 80,
    resources: 12,
  },
  {
    id: 2,
    icon: "📐",
    name: "Mathematics",
    code: "MATH",
    description: "Matrices, complex numbers, logic and coordinate geometry.",
    progress: 65,
    resources: 9,
  },
  {
    id: 3,
    icon: "🤖",
    name: "Fundamentals of AI",
    code: "AI",
    description: "AI agents, machine learning, prompting and decision making.",
    progress: 72,
    resources: 14,
  },
  {
    id: 4,
    icon: "🗄️",
    name: "Database Management",
    code: "DBMS",
    description: "Databases, SQL, relationships and data management.",
    progress: 58,
    resources: 8,
  },
  {
    id: 5,
    icon: "🖥️",
    name: "Introduction to Computer Science",
    code: "CS",
    description: "Computer systems, software, hardware and computing concepts.",
    progress: 60,
    resources: 10,
  },
  {
    id: 6,
    icon: "⚙️",
    name: "Software Engineering",
    code: "SE",
    description: "Software development practices, design and project workflows.",
    progress: 45,
    resources: 6,
  },
];

function Subjects() {
  const [subjects, setSubjects] = useState(() => {
    const savedSubjects = localStorage.getItem("campusAI_subjects");

    if (savedSubjects) {
      try {
        return JSON.parse(savedSubjects);
      } catch {
        return defaultSubjects;
      }
    }

    return defaultSubjects;
  });

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
    icon: "📚",
  });

  useEffect(() => {
    localStorage.setItem(
      "campusAI_subjects",
      JSON.stringify(subjects)
    );
  }, [subjects]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name.trim() || !formData.code.trim()) {
      return;
    }

    const newSubject = {
      id: Date.now(),
      icon: formData.icon || "📚",
      name: formData.name.trim(),
      code: formData.code.trim().toUpperCase(),
      description:
        formData.description.trim() ||
        "No description added yet.",
      progress: 0,
      resources: 0,
    };

    setSubjects((current) => [
      ...current,
      newSubject,
    ]);

    setFormData({
      name: "",
      code: "",
      description: "",
      icon: "📚",
    });

    setShowModal(false);
  }

  function closeModal() {
    setShowModal(false);

    setFormData({
      name: "",
      code: "",
      description: "",
      icon: "📚",
    });
  }

  const totalResources = subjects.reduce(
    (total, subject) => total + subject.resources,
    0
  );

  const averageProgress =
    subjects.length === 0
      ? 0
      : Math.round(
          subjects.reduce(
            (total, subject) =>
              total + subject.progress,
            0
          ) / subjects.length
        );

  return (
    <div className="subjects-page">

      {/* HEADER */}

      <div className="subjects-header">
        <div>
          <p className="welcome">
            CAMPUS AI
          </p>

          <h1 className="page-title">
            📚 Subjects
          </h1>

          <p className="page-description">
            Manage your university subjects,
            notes and study materials.
          </p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => setShowModal(true)}
        >
          + Add Subject
        </button>
      </div>

      {/* SUMMARY */}

      <div className="subjects-summary">

        <div>
          <span>Total Subjects</span>
          <strong>{subjects.length}</strong>
        </div>

        <div>
          <span>Study Resources</span>
          <strong>{totalResources}</strong>
        </div>

        <div>
          <span>Average Progress</span>
          <strong>{averageProgress}%</strong>
        </div>

      </div>

      {/* SUBJECT CARDS */}

      <div className="subjects-grid">

        {subjects.map((subject) => (
          <article
            className="subject-card"
            key={subject.id}
          >

            <div className="subject-card-top">

              <div className="subject-icon">
                {subject.icon}
              </div>

              <span className="subject-code">
                {subject.code}
              </span>

            </div>

            <h2>
              {subject.name}
            </h2>

            <p className="subject-description">
              {subject.description}
            </p>

            <div className="subject-info">

              <span>
                📄 {subject.resources} resources
              </span>

              <span>
                {subject.progress}% complete
              </span>

            </div>

            <div className="subject-progress">

              <div
                className="subject-progress-fill"
                style={{
                  width: `${subject.progress}%`,
                }}
              />

            </div>

            <button
              type="button"
              className="subject-open-button"
            >
              Open Subject →
            </button>

          </article>
        ))}

      </div>

      {/* ADD SUBJECT MODAL */}

      {showModal && (
        <div
          className="modal-overlay"
          onMouseDown={closeModal}
        >

          <div
            className="subject-modal"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >

            <div className="modal-header">

              <div>
                <p className="welcome">
                  CAMPUS AI
                </p>

                <h2>
                  Add New Subject
                </h2>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                ×
              </button>

            </div>

            <form onSubmit={handleSubmit}>

              <label>
                Subject Name

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Web Development"
                  autoFocus
                  required
                />
              </label>

              <label>
                Subject Code

                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="e.g. WEB101"
                  maxLength="12"
                  required
                />
              </label>

              <label>
                Subject Icon

                <select
                  name="icon"
                  value={formData.icon}
                  onChange={handleChange}
                >
                  <option value="📚">
                    📚 General
                  </option>

                  <option value="💻">
                    💻 Programming
                  </option>

                  <option value="🤖">
                    🤖 Artificial Intelligence
                  </option>

                  <option value="📐">
                    📐 Mathematics
                  </option>

                  <option value="🗄️">
                    🗄️ Database
                  </option>

                  <option value="🖥️">
                    🖥️ Computer Science
                  </option>

                  <option value="⚙️">
                    ⚙️ Engineering
                  </option>
                </select>

              </label>

              <label>
                Description

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="What will you study in this subject?"
                  rows="4"
                />
              </label>

              <div className="modal-actions">

                <button
                  type="button"
                  className="secondary-button"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  Add Subject
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default Subjects;