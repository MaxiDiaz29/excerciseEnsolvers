package com.implementationexcercise.md.excercise.ToDo;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.apachecommons.CommonsLog;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity(name = "todos")
@Table(name="Todos")
@ToString
public class ToDo {
    @Id
    @Column(name = "id") @Getter @Setter
    private int id;
    @Column(name = "task") @Getter @Setter
    private String task;
    @Column(name = "done") @Getter @Setter
    private int done;
    public ToDo(){};
}
