<footer class="{{ $containerClasses }} mt-12">
    <div class="{{ $containerInnerClasses }}">
        @php(dynamic_sidebar('sidebar-footer'))

        <p class="my-6">
            <a href="https://roots.io/radicle/" class="flex items-center gap-2 font-bold hover:text-underline">
                <x-icon-radicle class="w-4 h-4" />
                Built with Radicle
            </a>
        </p>
    </div>
</footer>
