import { v4 as uuidv4 } from "uuid";

export const initialData = {
  boards: [
    {
      id: uuidv4(),
      title: "Work Tasks",
      lists: [
        {
          id: uuidv4(),
          title: "Todo List",
          tasks: [
            {
              id: uuidv4(),
              title: "Find new notebook",
              description: "Need to buy a new notebook for work.",
              color: "red",
              status: "notCompleted",
              priority: "",
              tags: ["urgent", "work", "office", "shopping"],
              date: new Date(),
              subtasks: [],
            },
            {
              id: uuidv4(),
              title: "Prepare project proposal",
              description: "Draft a proposal for the new project.",
              color: "red",
              status: "notCompleted",
              priority: "high",
              tags: ["project", "urgent", "work"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Outline proposal",
                  status: "completed",
                },
                {
                  id: uuidv4(),
                  title: "Gather feedback",
                  status: "notCompleted",
                },
              ],
            },
            {
              id: uuidv4(),
              title: "Buy office supplies",
              description: "Order new office supplies for the team.",
              color: "red",
              status: "notCompleted",
              priority: "medium",
              tags: ["office", "supplies", "important"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "List needed items",
                  status: "completed",
                },
                { id: uuidv4(), title: "Place order", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Book conference room",
              description: "Reserve the conference room for next week.",
              color: "red",
              status: "notCompleted",
              priority: "none",
              tags: ["meeting", "work", "urgent"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Check availability",
                  status: "completed",
                },
                { id: uuidv4(), title: "Send invites", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Organize team lunch",
              description: "Plan a team lunch for the end of the month.",
              color: "red",
              status: "notCompleted",
              priority: "low",
              tags: ["team", "lunch", "fun"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Choose restaurant",
                  status: "completed",
                },
                { id: uuidv4(), title: "Send invites", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Finish presentation",
              description: "Complete slides for upcoming meeting.",
              color: "green",
              status: "notCompleted",
              priority: "",
              tags: ["presentation", "meeting", "work"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Design slides",
                  status: "notCompleted",
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Doing List",
          tasks: [],
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Personal Goals",
      lists: [
        {
          id: uuidv4(),
          title: "BackLog",
          tasks: [
            {
              id: uuidv4(),
              title: "Write report",
              description: "Write a report on the latest project.",
              color: "#EA5555",
              status: "notCompleted",
              priority: "medium",
              tags: ["report", "work", "priority"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Research", status: "completed" },
              ],
            },
            {
              id: uuidv4(),
              title: "Plan vacation",
              description: "Plan a vacation for the upcoming holidays.",
              color: "#EA5555",
              status: "notCompleted",
              priority: "low",
              tags: ["vacation", "personal", "planning"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Choose destination",
                  status: "completed",
                },
                { id: uuidv4(), title: "Book flights", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Prepare for exam",
              description: "Study for the upcoming exam.",
              color: "#EA5555",
              status: "notCompleted",
              priority: "none",
              tags: ["exam", "study", "priority"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Review notes", status: "completed" },
                {
                  id: uuidv4(),
                  title: "Practice questions",
                  status: "notCompleted",
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Done",
          tasks: [
            {
              id: uuidv4(),
              title: "Complete project",
              description: "Finish the project by the deadline.",
              color: "#EA5555",
              status: "completed",
              priority: "high",
              tags: ["project", "deadline", "work"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Develop features",
                  status: "completed",
                },
                {
                  id: uuidv4(),
                  title: "Test functionality",
                  status: "notCompleted",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Office Management",
      lists: [
        {
          id: uuidv4(),
          title: "ToDo",
          tasks: [
            {
              id: uuidv4(),
              title: "Schedule meeting",
              description: "Set up a meeting with the team.",
              color: "#ffffff",
              status: "notCompleted",
              priority: "high",
              tags: ["meeting", "work", "urgent"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Send invites", status: "completed" },
                {
                  id: uuidv4(),
                  title: "Prepare agenda",
                  status: "notCompleted",
                },
              ],
            },
            {
              id: uuidv4(),
              title: "Review documents",
              description: "Review documents before submission.",
              color: "#ffffff",
              status: "notCompleted",
              priority: "medium",
              tags: ["documents", "review", "work"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Check for errors",
                  status: "completed",
                },
                {
                  id: uuidv4(),
                  title: "Provide feedback",
                  status: "notCompleted",
                },
              ],
            },
            {
              id: uuidv4(),
              title: "Submit report",
              description: "Submit the quarterly report.",
              color: "#ffffff",
              status: "notCompleted",
              priority: "high",
              tags: ["report", "submission", "priority"],
              date: new Date(),
              subtasks: [],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "BackLog",
          tasks: [
            {
              id: uuidv4(),
              title: "Prepare presentation",
              description:
                "Prepare a presentation for the upcoming conference.",
              color: "#ffffff",
              status: "notCompleted",
              priority: "medium",
              tags: ["presentation", "conference", "important"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Create slides", status: "completed" },
                {
                  id: uuidv4(),
                  title: "Practice delivery",
                  status: "notCompleted",
                },
              ],
            },
            {
              id: uuidv4(),
              title: "Plan event",
              description: "Plan an event for the company anniversary.",
              color: "#ffffff",
              status: "notCompleted",
              priority: "low",
              tags: ["event", "planning", "company"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Choose venue", status: "notCompleted" },
                {
                  id: uuidv4(),
                  title: "Send invitations",
                  status: "notCompleted",
                },
              ],
            },
            {
              id: uuidv4(),
              title: "Review code",
              description: "Review code before deployment.",
              color: "#ffffff",
              status: "completed",
              priority: "medium",
              tags: ["code", "review", "deployment"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Check for bugs", status: "completed" },
                {
                  id: uuidv4(),
                  title: "Optimize performance",
                  status: "completed",
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Done",
          tasks: [
            {
              id: uuidv4(),
              title: "Set up new software",
              description: "Install and configure new software for the team.",
              color: "#ffffff",
              status: "completed",
              priority: "none",
              tags: ["software", "setup", "work"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Install software",
                  status: "completed",
                },
                {
                  id: uuidv4(),
                  title: "Configure settings",
                  status: "completed",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      title: "New Board",
      lists: [],
    },
  ],
};
