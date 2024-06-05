import {v4 as uuidv4} from 'uuid';


export const initialData = {
    boards: [
        {
            id: uuidv4(),
            title: "board1",
            lists: [
                {
                    id: uuidv4(),
                    title: "todoList",
                    tasks: [
                        {
                            id: uuidv4(),
                            title: "Find new notebook",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        }, {
                            id: uuidv4(),
                            title: "Find new job",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Find new paper",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Find new class",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Find new notebook2",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Find new notebook3",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Find new notebook4",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        }, {
                            id: uuidv4(),
                            title: "Find new job",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Find new paper",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Find new class",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Find new notebook2",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Find new notebook3",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Find new notebook4",
                            description: "Need to buy a new notebook for work.",
                            color: "red",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Research online", status: "completed"},
                                {id: uuidv4(), title: "Visit store", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Finish presentation",
                            description: "Complete slides for upcoming meeting.",
                            color: "green",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Gather data", status: "completed"},
                                {id: uuidv4(), title: "Design slides", status: "notCompleted"},
                            ],
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: "DoingList",
                    tasks: [],
                },
            ],
        },
        {
            id: uuidv4(),
            title: "board2",
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
                            subtasks: [
                                {id: uuidv4(), title: "Research", status: "completed"},
                                {id: uuidv4(), title: "Write content", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Plan vacation",
                            description: "Plan a vacation for the upcoming holidays.",
                            color: "#EA5555",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Choose destination", status: "completed"},
                                {id: uuidv4(), title: "Book flights", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Prepare for exam",
                            description: "Study for the upcoming exam.",
                            color: "#EA5555",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Review notes", status: "completed"},
                                {id: uuidv4(), title: "Practice questions", status: "notCompleted"},
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
                            subtasks: [
                                {id: uuidv4(), title: "Develop features", status: "completed"},
                                {id: uuidv4(), title: "Test functionality", status: "notCompleted"},
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: uuidv4(),
            title: "board 3",
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
                            subtasks: [
                                {id: uuidv4(), title: "Send invites", status: "completed"},
                                {id: uuidv4(), title: "Prepare agenda", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Review documents",
                            description: "Review documents before submission.",
                            color: "#ffffff",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Check for errors", status: "completed"},
                                {id: uuidv4(), title: "Provide feedback", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Submit report",
                            description: "Submit the quarterly report.",
                            color: "#ffffff",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Compile data", status: "completed"},
                                {id: uuidv4(), title: "Proofread report", status: "notCompleted"},
                            ],
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: "BackLog",
                    tasks: [
                        {
                            id: uuidv4(),
                            title: "Prepare presentation presentation presentation presentation",
                            description: "Prepare a presentation for the upcoming conference.",
                            color: "#ffffff",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Create slides", status: "completed"},
                                {id: uuidv4(), title: "Practice delivery", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Plan event",
                            description: "Plan an event for the company anniversary.",
                            color: "#ffffff",
                            status: "notCompleted",
                            subtasks: [
                                {id: uuidv4(), title: "Choose venue", status: "notCompleted"},
                                {id: uuidv4(), title: "Send invitations", status: "notCompleted"},
                            ],
                        },
                        {
                            id: uuidv4(),
                            title: "Review code",
                            description: "Review code before deployment.",
                            color: "#ffffff",
                            status: "completed",
                            subtasks: [
                                {id: uuidv4(), title: "Check for bugs", status: "completed"},
                                {id: uuidv4(), title: "Optimize performance", status: "completed"},
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
                            title: "Finish project",
                            description: "Complete the project tasks.",
                            color: "#635FC7",
                            status: "completed",
                            subtasks: [
                                {id: uuidv4(), title: "Implement features", status: "completed"},
                                {id: uuidv4(), title: "Perform testing", status: "completed"},
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};


// export const initialData ={
//   boards: []
// }