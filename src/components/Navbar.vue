<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.html">Cardumen</a>
                </div>

                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <ul class="nav navbar-right navbar-top-links">
                    <li class="dropdown navbar-inverse">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="fa fa-bell fa-fw"></i> <b class="caret"></b>
                        </a>

                        <!-- notificaciones -->
                        <ul class="dropdown-menu dropdown-alerts">
                            <li>
                                <a href="#">
                                    <div>
                                        <i class="fa fa-comment fa-fw"></i> Nuevo comentario
                                        <span class="pull-right text-muted small">hace 4 minutos</span>
                                    </div>
                                </a>
                            </li>
                            
                            <li class="divider"></li>
                            <li>
                                <a class="text-center" href="#">
                                    <strong>Ver todas las notificaciones</strong>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- menu desplegable de usuario -->
                    <li class="dropdown">
                        <a class="dropdown-toggle relative" data-toggle="dropdown" href="#">
                            <div v-if="false">
                                <i class="fa fa-user fa-fw"></i> Luis Vilches abarca <b class="caret"></b>
                            </div>
                            <div v-else>
                                <img id="avatar" src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100" alt=""> Luis Vilches Abarca <b class="caret"></b>
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-user">
                            <li><a href="#"><i class="fas fa-user fa-fw"></i> Perfil de usuario</a>
                            </li>
                            <li><a href="#"><i class="fas fa-user-cog fa-fw"></i> Configuraciones</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Cerrar session</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- /.navbar-top-links -->
                <div class="navbar-default sidebar" role="navigation">
                    
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        
                        <div class="pd20">
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Buscar...">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>

                        <hr>

                        <!-- Dashboard -->

                        <div class="panel-heading" role="tab" id="dashboard">
                            <h4 class="panel-title text-left">
                                <router-link class="black-color" to="/"><i class="fas fa-columns"></i> Dashboard </router-link>
                            </h4>
                        </div>

                        <!-- acordion -->
                        <div class="panel panel-default" id="sidebar-list">
                            <!-- proyectos -->
                            <div class="panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title text-left">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#proyectos" aria-expanded="true" aria-controls="proyectos">
                                        <i class="fas fa-project-diagram"></i> Proyectos
                                    </a>
                                </h4>
                            </div>
                            <div id="proyectos" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                <div class="panel-body">
                                    <ul>
                                        <li>
                                            <router-link to="/proyectos/new"><i class="fas fa-plus-square"></i> Nuevo proyecto</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/proyectos/search"><i class="fas fa-search"></i> Buscar proyecto</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/proyectos/list"><i class="fas fa-list"></i> Listado de proyectos</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- clientes -->

                            <div class="panel-heading" role="tab" id="headingTwo">
                                <h4 class="panel-title text-left">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#clientes" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fas fa-building"></i> Clientes
                                    </a>
                                </h4>
                            </div>
                            <div id="clientes" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    <ul>
                                        <li>
                                            <router-link to="/clientes/new"><i class="fas fa-plus-square"></i> Nuevo cliente</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/clientes/search"><i class="fas fa-search"></i> Buscar cliente</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/clientes/list"><i class="fas fa-list"></i> Listado de clientes</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- equipos -->

                            <div class="panel-heading" role="tab" id="headingThree">
                                <h4 class="panel-title text-left">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#equipos" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fas fa-users"></i> Equipos
                                    </a>
                                </h4>
                            </div>
                            <div id="equipos" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div class="panel-body">
                                    <ul>
                                        <li>
                                            <router-link to="/equipos/new"><i class="fas fa-plus-square"></i> Nuevo equipo</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/equipos/search"><i class="fas fa-search"></i> Buscar equipo</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/equipos/list"><i class="fas fa-list"></i> Listado de equipos</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- applications -->

                            <div class="panel-heading" role="tab" id="headingFour">
                                <h4 class="panel-title text-left">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#applications" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fas fa-cogs"></i> Aplicación
                                    </a>
                                </h4>
                            </div>
                            <div id="applications" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                <div class="panel-body">
                                    <ul>
                                        <li>
                                            <router-link to="/app/categories"><i class="fas fa-asterisk"></i> Categorias</router-link>
                                        </li>

                                        <li>
                                            <router-link to="/app/proyectos"><i class="fas fa-project-diagram"></i> Proyectos</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- usuarios -->

                            <div class="panel-heading" role="tab" id="headingFive">
                                <h4 class="panel-title text-left">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#user" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fas fa-user"></i> Usuarios
                                    </a>
                                </h4>
                            </div>
                            <div id="user" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                <div class="panel-body">
                                    <ul>
                                        <li>
                                            <router-link to="/usuarios/new"><i class="fas fa-plus-square"></i> Nuevo usuario</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/usuarios/search"><i class="fas fa-search"></i> Buscar usuario</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/usuarios/list"><i class="fas fa-list"></i> Listado de usuarios</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
</template>

<script>
export default {
    name:'a-navbar'
}
</script>


<style>
    .pd20{
        padding: 20px 20px 0 20px!important;
    }

    #sidebar-list ul li{
        list-style: none;
        margin-bottom: 10px;
    }

    #sidebar-list ul li a{
        color: #222!important;
        text-align: left!important;
        cursor: pointer;
    }
    #sidebar-list ul{
        text-align: left!important;
        cursor: pointer;
    }

    .panel-title .fas{
        margin-right: 10px;
    }

    .panel.panel-default{
        border-radius: 0px;
        border: none;
    }

    .panel-default > .panel-heading {
        color: #333;
        background-color: #F8F8F8;
        border-color: #ddd;
    }

    hr{
        margin-bottom: 0px;
    }

    #avatar{
        max-width: 19px;
        position: relative;
        top: -1px;
        left: -10px;
    }

    .relative{
        position: relative;
    }

    .navbar-top-links>li>a {
        color: #fff;
    }
    
    .navbar-inverse .navbar-brand {
        color: #fff;
    }

    .black-color{
        color: #333!important;
        cursor: pointer;
    }
</style>
