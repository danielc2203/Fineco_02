<?php

  $con=mysqli_connect("localhost","root","","finecoapp");
  
  $action=$_POST["action"];
  if($action=="Insert"){
    $name=mysqli_real_escape_string($con,$_POST["name"]);
    $apellido=mysqli_real_escape_string($con,$_POST["primer_apellido"]);
    $contact=mysqli_real_escape_string($con,$_POST["contact"]);
    $sql="insert into clientes (primer_nombre,primer_apellido,correo_electronico) values ('{$name}','{$apellido}','{$contact}') ";
    if($con->query($sql)){
      $id=$con->insert_id;
      echo "
        <tr uid='{$id}'>
          <td>{$name}</td>
          <td>{$apellido}</td>
          <td>{$contact}</td>
          <td><a href='#' class='btn btn-primary edit'>Edit</a></td>
          <td><a href='#' class='btn btn-danger delete'>Delete</a></td>
        </tr>";
    }else{
      echo false;
    }
  }else if($action=="Update"){
    $id=mysqli_real_escape_string($con,$_POST["id"]);
    $name=mysqli_real_escape_string($con,$_POST["name"]);
    $apellido=mysqli_real_escape_string($con,$_POST["primer_apellido"]);
    $contact=mysqli_real_escape_string($con,$_POST["contact"]);
    $sql="update clientes SET primer_nombre='{$name}',primer_apellido='{$apellido}',correo_electronico='{$contact}' where ID='{$id}'";
    if($con->query($sql)){
      echo "
        <td>{$name}</td>
        <td>{$apellido}</td>
        <td>{$contact}</td>
        <td><a href='#' class='btn btn-primary edit'>Edit</a></td>
        <td><a href='#' class='btn btn-danger delete'>Delete</a></td>";
        
    }else{
      echo false;
    }
  }else if($action=="Delete"){
    $id=$_POST["uid"];
    $sql="delete from clientes where ID='{$id}'";
    if($con->query($sql)){
      echo true;
    }else{
      echo false;
    }
  }
?>