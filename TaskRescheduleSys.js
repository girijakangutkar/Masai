let pendingTasks = ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6"];

pendingTasks.pop();

pendingTasks.unshift("HighPriorityTask1");

pendingTasks.unshift("HighPriorityTask2");

let lastEle = pendingTasks.length - 1;

pendingTasks[lastEle] = "LastTask";

console.log("Updated Task list:", pendingTasks);
