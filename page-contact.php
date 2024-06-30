<?php
/*
Template Name: Шаблон "Контакты"
*/
?>
<?php get_header() ?>

<section id="contact">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3fa6c0a388424a1e7fd6fee3df8da23bc132a7f80bac65e9d54b69a4ff78d514&amp;source=constructor" width="100%" height="575" frameborder="0"></iframe>
                <div class="contact-card">
                    <h2>Наши контакты</h2>
                    <div class="contact-item"><span>Адрес:</span><?php the_field('site_address', 'options') ?></div>
                    <div class="contact-item"><span>Телефон:</span> <a href="tel:<?php the_field('site_tel', 'options') ?>"><?php the_field('site_tel', 'options') ?></a></div>
                    <div class="contact-item"><span>Email:</span> <a href="mailto:info@mail.ru"><?php the_field('site_email', 'options') ?></a></div>
                    <div class="contact-item"><span>Часы работы:</span><?php the_field('site_worktime', 'options') ?></div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer() ?>