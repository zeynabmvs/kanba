import { v4 as uuidv4 } from "uuid";

export const initialData = {
  boards: [
    {
      id: uuidv4(),
      title: "Product Sprint",
      lists: [
        {
          id: uuidv4(),
          title: "Backlog",
          sort: "manualReorder",
          direction: "asc",
          tasks: [
            {
              id: uuidv4(),
              title: "Draft Q1 roadmap (1-pager)",
              description:
                "Put together a crisp roadmap doc with goals, milestones, and risks for Q1.",
              color: "",
              status: "notCompleted",
              priority: "high",
              tags: ["work", "planning", "stakeholders"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Gather inputs from leads", status: "completed" },
                { id: uuidv4(), title: "Write first draft", status: "notCompleted" },
                { id: uuidv4(), title: "Get feedback + revise", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Fix 'create task' validation edge case",
              description:
                "Users can submit a task with whitespace-only title. Add trim + friendly error state.",
              color: "",
              status: "notCompleted",
              priority: "medium",
              tags: ["bug", "frontend", "ux"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Repro + write quick test plan",
                  status: "completed",
                },
                {
                  id: uuidv4(),
                  title: "Implement + verify behavior",
                  status: "notCompleted",
                },
              ],
            },
            {
              id: uuidv4(),
              title: "Write release notes for v1.6",
              description:
                "Summarize key changes, screenshots, and callouts for the internal rollout.",
              color: "",
              status: "notCompleted",
              priority: "low",
              tags: ["docs", "release", "comms"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Collect highlights from PRs",
                  status: "completed",
                },
                { id: uuidv4(), title: "Write + share draft", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Customer interview #3",
              description:
                "Run a 30-min interview focusing on onboarding friction and task organization habits.",
              color: "",
              status: "notCompleted",
              priority: "medium",
              tags: ["research", "customer", "product"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Confirm time + agenda",
                  status: "completed",
                },
                { id: uuidv4(), title: "Prepare questions", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Clean up analytics event names",
              description:
                "Standardize event casing and add missing properties for task move + task complete.",
              color: "",
              status: "notCompleted",
              priority: "none",
              tags: ["analytics", "instrumentation"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Audit current events",
                  status: "completed",
                },
                { id: uuidv4(), title: "Update + verify in dev", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Prepare demo for Friday",
              description:
                "Record a quick walkthrough and have a live backup path ready (data + steps).",
              color: "",
              status: "notCompleted",
              priority: "high",
              tags: ["demo", "stakeholders", "prep"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Happy path script",
                  status: "notCompleted",
                },
                {
                  id: uuidv4(),
                  title: "Backup plan (offline screenshots)",
                  status: "notCompleted",
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "In Progress",
          sort: "date",
          direction: "desc",
          tasks: [
            {
              id: uuidv4(),
              title: "Refactor board sidebar spacing",
              description:
                "Tighten spacing and align icons/labels so the sidebar reads cleaner on small screens.",
              color: "",
              status: "notCompleted",
              priority: "low",
              tags: ["ui", "cleanup", "frontend"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Update styles", status: "completed" },
                { id: uuidv4(), title: "Check responsive breakpoints", status: "notCompleted" },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Done",
          sort: "date",
          direction: "desc",
          tasks: [
            {
              id: uuidv4(),
              title: "Triage support inbox",
              description: "Close out quick wins and tag longer issues for the next sprint.",
              color: "",
              status: "completed",
              priority: "medium",
              tags: ["support", "ops"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Reply to 5 threads", status: "completed" },
                { id: uuidv4(), title: "Log 2 bugs", status: "completed" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Life Admin",
      lists: [
        {
          id: uuidv4(),
          title: "Errands",
          sort: "date",
          direction: "desc",
          tasks: [
            {
              id: uuidv4(),
              title: "Grocery run (weeknight dinner plan)",
              description:
                "Grab ingredients for 3 easy dinners + snacks. Aim for 30-minute recipes.",
              color: "",
              status: "notCompleted",
              priority: "medium",
              tags: ["home", "food", "errands"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Make a list", status: "completed" },
                { id: uuidv4(), title: "Check pantry", status: "notCompleted" },
                { id: uuidv4(), title: "Pick up groceries", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Book dentist appointment",
              description: "Schedule a cleaning and update insurance info if needed.",
              color: "",
              status: "notCompleted",
              priority: "high",
              tags: ["health", "admin"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Find next available slot",
                  status: "completed",
                },
                { id: uuidv4(), title: "Confirm appointment", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Declutter closet (30-min reset)",
              description:
                "Quick pass: donate bag + organize shelves so mornings are less chaotic.",
              color: "",
              status: "notCompleted",
              priority: "none",
              tags: ["home", "declutter"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Fill donation bag", status: "completed" },
                { id: uuidv4(), title: "Organize hangers", status: "notCompleted" },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "This Week",
          sort: "priority",
          direction: "asc",
          tasks: [
            {
              id: uuidv4(),
              title: "Start a 10-minute stretch routine",
              description:
                "Pick a simple routine and do it after lunch 3x this week. Track how you feel.",
              color: "",
              status: "notCompleted",
              priority: "low",
              tags: ["health", "habit"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Choose routine", status: "completed" },
                { id: uuidv4(), title: "Day 1", status: "notCompleted" },
                { id: uuidv4(), title: "Day 2", status: "notCompleted" },
              ],
            }
          ],
        },
        {
          id: uuidv4(),
          title: "Done",
          sort: "date",
          direction: "asc",
          tasks: [
            {
              id: uuidv4(),
              title: "Meal-prep breakfast jars",
              description: "Made 4 overnight oats jars for the week.",
              color: "",
              status: "completed",
              priority: "medium",
              tags: ["home", "food"],
              date: new Date(),
              subtasks: [
                {
                  id: uuidv4(),
                  title: "Buy ingredients",
                  status: "completed",
                },
                {
                  id: uuidv4(),
                  title: "Prep + store",
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
      title: "Weekend Fun",
      lists: [
        {
          id: uuidv4(),
          title: "Ideas",
          sort: "manualReorder",
          direction: "asc",
          tasks: [
            {
              id: uuidv4(),
              title: "Try a new coffee spot",
              description: "Pick a cafe with good light and bring a book.",
              color: "",
              status: "notCompleted",
              priority: "none",
              tags: ["friends", "city", "relax"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Shortlist 3 places", status: "completed" },
                { id: uuidv4(), title: "Choose one + go", status: "notCompleted" },
              ],
            },
            {
              id: uuidv4(),
              title: "Make homemade pizza night",
              description: "Do a simple dough or use store-bought; focus on fun toppings.",
              color: "",
              status: "notCompleted",
              priority: "low",
              tags: ["food", "fun", "home"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Pick toppings", status: "notCompleted" },
                { id: uuidv4(), title: "Invite a friend", status: "notCompleted" },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "In Progress",
          sort: "date",
          direction: "desc",
          tasks: [
            {
              id: uuidv4(),
              title: "Photo walk (golden hour)",
              description: "Go for a 45-min walk and snap 10 photos (no pressure, just practice).",
              color: "",
              status: "notCompleted",
              priority: "medium",
              tags: ["hobby", "outdoors", "creative"],
              date: new Date(),
              subtasks: [
                { id: uuidv4(), title: "Charge phone/camera", status: "completed" },
                { id: uuidv4(), title: "Pick a route", status: "notCompleted" },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Done",
          sort: "date",
          direction: "desc",
          tasks: [
            {
              id: uuidv4(),
              title: "Finish a cozy book chapter",
              description: "Read 30 minutes before bed instead of scrolling.",
              color: "",
              status: "completed",
              priority: "low",
              tags: ["reading", "relax"],
              date: new Date(),
              subtasks: [{ id: uuidv4(), title: "Read 30 minutes", status: "completed" }],
            },
          ],
        },
      ],
    },
  ],
};
