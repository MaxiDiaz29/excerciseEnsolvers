package com.implementationexcercise.md.excercise.ToDo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ToDoController {
    @Autowired
    private ToDoDao toDoDao;

    @RequestMapping(value = "api/tasks")
    public List<ToDo> getTodos(){
        List<ToDo> todolist = new ArrayList<>();
        todolist = toDoDao.getToDos();

        return todolist;
    }

    @RequestMapping(value = "api/tasks/delete/{id}", method = RequestMethod.DELETE)
    public void deleteToDo(@PathVariable  int id){
        toDoDao.deleteToDo(id);
    }

    @RequestMapping(value = "api/tasks/insert", method = RequestMethod.POST)
    public void intoToDo(@RequestBody ToDo toDo){
        toDoDao.intoToDo(toDo);
    }

    @RequestMapping(value = "api/tasks/done/{id}", method = RequestMethod.POST)
    public void doneToDo(@PathVariable int id){
        toDoDao.doneToDo(id);
    }

    @RequestMapping(value = "api/tasks/edit/{id}/{task}", method = RequestMethod.POST)
    public void editToDo(@PathVariable int id,@PathVariable String task){toDoDao.editToDo(id, task);}
}