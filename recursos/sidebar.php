<?php $url="http://".$_SERVER['HTTP_HOST']."/Fineco_02";?>

<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="<?php echo $url;?>/F_inicio/index.php" class="brand-link">
      <img src="<?php echo $url;?>/dist/img/fineco_1.png" alt="Fineco APP" class="brand-image elevation-1" style="opacity: .8">
      <span class="brand-text font-weight-light">Fineco APP - v1.0.1</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="<?php echo $url;?>/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="<?php echo $url;?>/F_inicio/index.php" class="d-block"><?php echo $usuariof ?></a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Indicadores
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="<?php echo $url;?>/F_inicio/index.php" class="nav-link active">
                  <i class="nav-icon fas fa-home"></i>
                  <p>Inicio</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?php echo $url;?>/F_Clientes" class="nav-link">
                  <i class="nav-icon fas fa-users"></i>
                  <p>Clientes</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?php echo $url;?>/F_Bancos/" class="nav-link">
                <i class="nav-icon fab fa-cc-diners-club	"></i>
                  <p>Bancos</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?php echo $url;?>/F_inicio/index.php" class="nav-link">
                <i class="nav-icon far fa-credit-card"></i>
                  <p>Creditos</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?php echo $url;?>/F_inicio/index.php" class="nav-link">
                <i class="nav-icon fas fa-dice-d20"></i>
                  <p>Tesorería</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?php echo $url;?>/F_inicio/index.php" class="nav-link">
                <i class="nav-icon fas fa-briefcase"></i>
                  <p>Cartera</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?php echo $url;?>/F_Empleados" class="nav-link">
                <i class="nav-icon fas fa-address-card"></i>
                  <p>Empleados</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?php echo $url;?>/F_inicio/index.php" class="nav-link">
                <i class="nav-icon fas fa-comment-dollar"></i>
                  <p>Contabilidad</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-header">FINECO APP 2022</li>
          <li class="nav-item">
            <a href="<?php echo $url;?>/global/cerrarsesion.php" class="nav-link">
              <i class="fas fa-sign-out-alt"></i>
              <p>Salir</p>
            </a>
          </li>

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>