package com.implementationexcercise.md.excercise.ToDo;

import java.util.List;

public interface ToDoDao {

    List<ToDo> getToDos();

    void deleteToDo(int id);

    void intoToDo(ToDo toDo);

    void doneToDo(int id);

    void editToDo(int id, String task);
}
