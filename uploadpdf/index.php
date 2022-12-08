<!-- Logica -->
<?php include ('../modulos/panel.php');?>
<!-- Fin de Logica Panel -->

<!-- HEADER - UBICADO EN RECURSOS -->
<?php include ('../recursos/header.php') ?>
<!-- Sweetalert 2 CSS -->

<!-- <link rel="stylesheet" href="assets/plugins/sweetalert2/sweetalert2.min.css"> -->
<!-- <link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.min.css"> -->
<link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.css">
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.6.7/sweetalert2.css" integrity="sha512-JzSVRb7c802/njMbV97pjo1wuJAE/6v9CvthGTDxiaZij/TFpPQmQPTcdXyUVucsvLtJBT6YwRb5LhVxX3pQHQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->

<!-- FIN DE HEADER -->

<!-- Main Sidebar Container -->
<?php include ('../recursos/sidebar.php');
//echo $id_usr;
 ?>


<!-- Fin de Sidebar -->



<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Indicadores Fineco</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Inicio</a></li>
              <li class="breadcrumb-item active">Indicadores</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">


<div class="container" style="margin-top:30px">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <strong>Pruebas de Archivos PDF</strong>
                    <h5><?php
                    date_default_timezone_set('America/Bogota');
                    // now
                    $date = new DateTimeImmutable();
                      ?></h5>
                <form method="post" enctype="multipart/form-data">
                    <?php
                        // If submit button is clicked
                        if (isset($_POST['submit']))
                        {
                          // get name from the form when submitted
                          $usuario =  $id_usr;
                          $id_cliente = $_POST['id_cliente']; 
                          $fecha = $date->format('d-m-Y H:i:s');;                    
 
                          if (isset($_FILES['pdf_file']['name']))
                          {  
                          // If the ‘pdf_file’ field has an attachment
                            $file_name = $_FILES['pdf_file']['name'];
                            $file_tmp = $_FILES['pdf_file']['tmp_name'];
                             
                            // Move the uploaded pdf file into the pdf folder
                            move_uploaded_file($file_tmp,"./pdf/".$file_name);
                            // Insert the submitted data from the form into the table
                            $consulta = "INSERT INTO pdf_data (usuario, id_cliente, archivo, fecha) VALUES('$usuario', '$id_cliente', '$file_name', '$fecha')";
                            $resultado = $conexion->prepare($consulta);
                            $resultado->execute(); 
  
 
                                if ($resultado)
                               {                            
                                ?>                                             
                                  <div class=
                                "alert alert-success alert-dismissible fade show text-center">
                                    <a class="close" data-dismiss="alert" aria-label="close">
                                      ×
                                    </a>
                                    <strong>Success!</strong> Data submitted successfully.
                                  </div>
                                <?php
                                }
                                else
                                {
                                ?>
                                  <div class=
                                "alert alert-danger alert-dismissible fade show text-center">
                                    <a class="close" data-dismiss="alert" aria-label="close">
                                      ×
                                    </a>
                                    <strong>Failed!</strong> Try Again!
                                  </div>
                                <?php
                                }
                            }
                            else
                            {
                              ?>
                                <div class=
                                "alert alert-danger alert-dismissible fade show text-center">
                                  <a class="close" data-dismiss="alert" aria-label="close">
                                      ×
                                  </a>
                                  <strong>Failed!</strong> File must be uploaded in PDF format!
                                </div>
                              <?php
                            }// end if
                        }// end if
                    ?>
                     
                    <div class="form-input py-2">
                        <div class="form-group">
                            <input type="text" class="form-control"
                                   placeholder="Usuario" name="usuario" value="<?php echo $id_usr ?>" readonly>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control"
                                   placeholder="Id_Cliente" name="id_cliente" required>
                        </div>                             
                        <div class="form-group">
                            <input type="file" name="pdf_file"
                                   class="form-control" accept=".pdf" required/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control"
                                   placeholder="fecha" name="fecha" value="<?php echo $date->format('d-m-Y H:i:s');?>" readonly>
                        </div> 
                        <div class="form-group">
                            <input type="submit"
                                  class="btnRegister" name="submit" value="Submit">
                        </div>
                    </div>
                </form>
            </div>           
             
            <div class="col-lg-6 col-md-6 col-12">
              <div class="card">
                <div class="card-header text-center">
                  <h4>Registro de la Base de Datod</h4>
                </div>
                <div class="card-body">
                   <div class="table-responsive">
                      <table>
                        <thead>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>id_cliente</th>
                            <th>Arhivo</th>
                            <th>Fecha</th>
                        </thead>
                        <tbody>
                        
                        <?php
                        $consulta = "SELECT * FROM pdf_data";
                        $resultado = $conexion->prepare($consulta);
                        $resultado->execute();
                        $grupo=$resultado->fetchAll();
                        foreach ($grupo as $valores):
                        ?>
                        <tr>
                            <td><?php echo $valores['id']; ?></td>
                            <td><?php echo $valores['usuario']; ?></td>
                            <td><?php echo $valores['id_cliente']; ?></td>
                            <td><?php echo $valores['archivo']; ?></td>
                            <td><?php echo $valores['fecha']; ?></td>
                        </tr> 
                          <?php endforeach;
                          $conexion=null;
                           ?>  
                        </tbody>
                      </table>               
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
      </section>
                            

<!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.4/dist/sweetalert2.all.min.js"></script> -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>

<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<script src="./scripts.js"></script>
<script src="../dist/js/pages/dashboard.js"></script>
<!-- fin de footer -->
