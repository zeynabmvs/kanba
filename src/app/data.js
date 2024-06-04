import { generateId } from "../utils/index";
export const initialData = {
  boards: [
    {
      id: 1,
      title: "board1",
      lists: [
        {
          id: generateId(),
          title: "todoList",
          tasks: [
            {
              id: generateId(),
              title: "Find new notebook",
              description: "Need to buy a new notebook for work.",
              color: "red",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Research online", status: "completed" },
                { id: generateId(), title: "Visit store", status: "notCompleted" },
              ],
            },
            {
              id: generateId(),
              title: "Find new notebook2",
              description: "Need to buy a new notebook for work.",
              color: "red",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Research online", status: "completed" },
                { id: generateId(), title: "Visit store", status: "notCompleted" },
              ],
            },
            {
              id: generateId(),
              title: "Find new notebook3",
              description: "Need to buy a new notebook for work.",
              color: "red",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Research online", status: "completed" },
                { id: generateId(), title: "Visit store", status: "notCompleted" },
              ],
            },
            {
              id: generateId(),
              title: "Find new notebook4",
              description: "Need to buy a new notebook for work.",
              color: "red",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Research online", status: "completed" },
                { id: generateId(), title: "Visit store", status: "notCompleted" },
              ],
            },
            {
              id: generateId(),
              title: "Finish presentation",
              description: "Complete slides for upcoming meeting.",
              color: "green",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Gather data", status: "completed" },
                { id: generateId(), title: "Design slides", status: "notCompleted" },
              ],
            },
          ],
        },
        {
          id: generateId(),
          title: "DoingList",
          tasks: [

          ],
        },
      ],
    },
    {
      id: 2,
      title: "board2",
      lists: [
        {
          id: generateId(),
          title: "BackLog",
          tasks: [
            {
              id: generateId(),
              title: "Write report",
              description: "Write a report on the latest project.",
              color: "#EA5555",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Research", status: "completed" },
                { id: generateId(), title: "Write content", status: "notCompleted" },
              ],
            },
            {
              id: generateId(),
              title: "Plan vacation",
              description: "Plan a vacation for the upcoming holidays.",
              color: "#EA5555",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Choose destination", status: "completed" },
                { id: generateId(), title: "Book flights", status: "notCompleted" },
              ],
            },
            {
              id: generateId(),
              title: "Prepare for exam",
              description: "Study for the upcoming exam.",
              color: "#EA5555",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Review notes", status: "completed" },
                { id: generateId(), title: "Practice questions", status: "notCompleted" },
              ],
            },
          ],
        },
        {
          id: generateId(),
          title: "Done",
          tasks: [
            {
              id: generateId(),
              title: "Complete project",
              description: "Finish the project by the deadline.",
              color: "#EA5555",
              status: "completed",
              subtasks: [
                { id: generateId(), title: "Develop features", status: "completed" },
                { id: generateId(), title: "Test functionality", status: "notCompleted" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "board 3",
      lists: [
        {
          id: generateId(),
          title: "ToDo",
          tasks: [
            {
              id: generateId(),
              title: "Schedule meeting",
              description: "Set up a meeting with the team.",
              color: "#ffffff",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Send invites", status: "completed" },
                { id: generateId(), title: "Prepare agenda", status: "notCompleted" },
              ],
            },
            {
              id: generateId(),
              title: "Review documents",
              description: "Review documents before submission.",
              color: "#ffffff",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Check for errors", status: "completed" },
                { id: generateId(), title: "Provide feedback", status: "notCompleted" },
              ],
            },
            {
              id: generateId(),
              title: "Submit report",
              description: "Submit the quarterly report.",
              color: "#ffffff",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Compile data", status: "completed" },
                { id: generateId(), title: "Proofread report", status: "notCompleted" },
              ],
            },
          ],
        },
        {
          id: generateId(),
          title: "BackLog",
          tasks: [
            {
              id: generateId(),
              title: "Prepare presentation presentation presentation presentation",
              description: "Prepare a presentation for the upcoming conference.",
              color: "#ffffff",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Create slides", status: "completed" },
                { id: generateId(), title: "Practice delivery", status: "notCompleted" },
              ],
            },
            {
              id: generateId(),
              title: "Plan event",
              description: "Plan an event for the company anniversary.",
              color: "#ffffff",
              status: "notCompleted",
              subtasks: [
                { id: generateId(), title: "Choose venue", status: "notCompleted" },
                { id: generateId(), title: "Send invitations", status: "notCompleted" },
              ],
            },
            {
              id: generateId(),
              title: "Review code",
              description: "Review code before deployment.",
              color: "#ffffff",
              status: "completed",
              subtasks: [
                { id: generateId(), title: "Check for bugs", status: "completed" },
                { id: generateId(), title: "Optimize performance", status: "completed" },
              ],
            },
          ],
        },
        {
          id: generateId(),
          title: "Done",
          tasks: [
            {
              id: generateId(),
              title: "Finish project",
              description: "Complete the project tasks.",
              color: "#635FC7",
              status: "completed",
              subtasks: [
                { id: generateId(), title: "Implement features", status: "completed" },
                { id: generateId(), title: "Perform testing", status: "completed" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 0,
      title: "my great board",
      lists: [],
    },
  ],
};


// export const initialData ={
//   boards: []
// }