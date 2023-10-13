<!doctype html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head(); ?>
        @include('utils.styles')
    </head>

    <body <?php body_class(); ?>>
        <?php wp_body_open(); ?>
        <?php do_action('get_header'); ?>

        <div id="app">
            <a class="sr-only focus:not-sr-only" href="#main">
                {{ __('Skip to content') }}
            </a>

            @include('sections.header')

            <main id="main" class="max-w-5xl mx-auto">
                <div class="{{ $containerInnerClasses }}">
                    @yield('content')
                </div>
            </main>

            @include('sections.footer')
        </div>

        <?php do_action('get_footer'); ?>
        <?php wp_footer(); ?>
        @include('utils.scripts')
    </body>
</html>
