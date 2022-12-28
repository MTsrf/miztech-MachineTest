
# Task

Create new Task and child task under it . the child task arraging on corresponding child tasks in hierarchical order

eg:
For parent task creation:
Input fields
a. title : The title of the parent task
b. due : Due date of parent task
c. parent_task=null (To understand that the task is parent)

For child task creation:
Input fields
a. title : The title of child task
b. due : Due date of child task
c. parent_task : id of parent task (To understand the parent of current child
task)


## API Reference

#### Get all items

```http
  GET "http://example.com/api/tasks/"
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | default |
| `title` | `string `| **Required**. title|
| `due` | `date `| **Required**. date|
| `parent_task` | `number `| **Required**. parent_task=null or parent_task ID|

```http
  POST   "http://example.com/api/tasks/"
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string `| **Required**. title|
| `due` | `date `| **Required**. date|
| `parent_task` | `number `| **Required**. parent_task=null or parent_task ID|




## Screenshots
Home Screen
![App Screenshot](https://github.com/MTsrf/miztech-MachineTest/blob/main/Task/public/screenshot/Screenshot%20from%202022-12-28%2013-22-22.png?raw=true)
Child Task
![App Screenshot](https://github.com/MTsrf/miztech-MachineTest/blob/main/Task/public/screenshot/Screenshot%20from%202022-12-28%2013-22-34.png?raw=true)
Task Submission
![App Screenshot](https://github.com/MTsrf/miztech-MachineTest/blob/main/Task/public/screenshot/Screenshot%20from%202022-12-28%2013-22-47.png?raw=true)
