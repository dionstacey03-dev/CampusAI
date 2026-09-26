function Dashboard() {
  return (
    <>
      <header>
        <div>
          <p className="welcome">WELCOME BACK</p>
          <h1>Good afternoon, Dion 👋</h1>

          <p className="subtitle">
            Here's what's happening with your studies today.
          </p>
        </div>

        <div className="profile">
          <div className="avatar">DS</div>

          <div>
            <strong>Dion Stacey</strong>
            <p>Software Engineering</p>
          </div>
        </div>
      </header>

      {/* STATISTICS */}

      <section className="stats">
        <div className="stat-card">
          <span>📚</span>

          <div>
            <p>Subjects</p>
            <h2>6</h2>
          </div>
        </div>

        <div className="stat-card">
          <span>📝</span>

          <div>
            <p>Assignments</p>
            <h2>4</h2>
          </div>
        </div>

        <div className="stat-card">
          <span>🎓</span>

          <div>
            <p>Upcoming Exams</p>
            <h2>3</h2>
          </div>
        </div>

        <div className="stat-card">
          <span>🔥</span>

          <div>
            <p>Study Streak</p>
            <h2>7 days</h2>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}

      <section className="dashboard-grid">

        {/* TODAY'S PLAN */}

        <div className="panel">
          <div className="panel-heading">
            <h2>Today's Plan</h2>

            <button type="button">
              View Planner
            </button>
          </div>

          <div className="task">
            <span className="task-time">
              10:00
            </span>

            <div>
              <strong>
                Programming Fundamentals
              </strong>

              <p>
                Practice Python loops and functions
              </p>
            </div>
          </div>

          <div className="task">
            <span className="task-time">
              14:00
            </span>

            <div>
              <strong>
                Mathematics
              </strong>

              <p>
                Review matrices and complex numbers
              </p>
            </div>
          </div>

          <div className="task">
            <span className="task-time">
              19:00
            </span>

            <div>
              <strong>
                Database Management
              </strong>

              <p>
                Study SQL queries
              </p>
            </div>
          </div>
        </div>

        {/* AI ASSISTANT */}

        <div className="panel ai-panel">
          <div className="ai-icon">
            ✦
          </div>

          <p className="ai-label">
            CAMPUS AI
          </p>

          <h2>
            Your AI Study Assistant
          </h2>

          <p>
            Ask questions, understand difficult topics,
            create study notes and prepare for exams.
          </p>

          <button
            type="button"
            className="ai-button"
          >
            Ask CampusAI →
          </button>
        </div>

        {/* DEADLINES */}

        <div className="panel">
          <div className="panel-heading">
            <h2>
              Upcoming Deadlines
            </h2>

            <button type="button">
              View All
            </button>
          </div>

          <div className="deadline">
            <div>
              <strong>
                Programming Assignment
              </strong>

              <p>
                Programming Fundamentals
              </p>
            </div>

            <span>2 days</span>
          </div>

          <div className="deadline">
            <div>
              <strong>
                Database Report
              </strong>

              <p>
                Database Management
              </p>
            </div>

            <span>5 days</span>
          </div>

          <div className="deadline">
            <div>
              <strong>
                AI Quiz
              </strong>

              <p>
                Fundamentals of AI
              </p>
            </div>

            <span>8 days</span>
          </div>
        </div>

        {/* WEEKLY PROGRESS */}

        <div className="panel">
          <h2>
            Weekly Progress
          </h2>

          <div className="progress-item">
            <div>
              <span>
                Programming
              </span>

              <strong>
                80%
              </strong>
            </div>

            <progress
              value="80"
              max="100"
            />
          </div>

          <div className="progress-item">
            <div>
              <span>
                Mathematics
              </span>

              <strong>
                65%
              </strong>
            </div>

            <progress
              value="65"
              max="100"
            />
          </div>

          <div className="progress-item">
            <div>
              <span>
                Artificial Intelligence
              </span>

              <strong>
                72%
              </strong>
            </div>

            <progress
              value="72"
              max="100"
            />
          </div>
        </div>

      </section>
    </>
  );
}

export default Dashboard;