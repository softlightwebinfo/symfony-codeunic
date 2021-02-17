<?php include "../../app/inc/html.php"; ?>
<div class="box">
    <div class="box-header">
        <h3 class="box-title">Publica un sliders porque registrarse</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <form action="<?= $_CONFIG->getApi() . "admin/sliders" ?>" id="form-upload-slider" method="POST" enctype="multipart/form-data">
            <div class="form-group">
                <input type="file" name="image">
            </div>
            <div class="form-group">
                <input type="text" required name="url">
            </div>
            <input type="hidden" name="page" value="porque-registrarse">
            <input type="hidden" name="token" value="<?= $_USER->getToken(); ?>">
            <button type="submit" name="form-slider" class="btn btn-success">Publicar slider</button>
        </form>
    </div>
    <!-- /.box-body -->
</div>
<div class="box">
    <div class="box-header">
        <h3 class="box-title">Listado de Sliders Porque registrarse</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <div class="row">
            <?php foreach (getSliders('porque-registrarse')->sliders as $key => $row): ?>
                <div class="col-xs-12 col-md-6 col-sm-6 col-lg-6">
                    <div data-token="<?= $_USER->getToken(); ?>" data-url="<?= $_CONFIG->getApi() . "admin/slider/" . $row->id ?>" class="Slider" data-id="<?= $row->id ?>" data-page="porque-registrarse">
                        <img class="Slider__image Image" src="<?= $row->banner; ?>" alt="">
                        <button class="del-slider Slider__btn btn btn-danger"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <!-- /.box-body -->
</div>
<?php include "../../app/inc/htmlFin.php"; ?>
