<p align="center">
  <a href="https://roots.io/radicle/">
    <img alt="Radicle" src="https://cdn.roots.io/app/uploads/logo-radicle.svg" height="100">
  </a>
</p>

<p align="center">Radicle is a WordPress stack from Roots</p>

<p align="center">
  <a href="https://roots.io/radicle/">Website</a> &nbsp;&nbsp; <a href="https://roots.io/radicle/docs/installation/">Documentation</a> &nbsp;&nbsp; <a href="https://github.com/roots/radicle/releases">Releases</a> &nbsp;&nbsp; <a href="https://discourse.roots.io/c/radicle">Community</a>
</p>

## Server requirements

* Your document root must be configurable (_most_ local development tools and webhosts should support this)
* PHP >= 8.0 with the following extensions: BCMath, Ctype, Fileinfo, JSON, Mbstring, Tokenizer, XML
* Composer
* WP-CLI

If you are using a managed WordPress host, make sure that they meet these requirements if you're wanting to deploy your Radicle projects to them.

## Getting started

📝 [**View the documentation**](https://roots.io/radicle/docs/)

💄 Visit the `/welcome/` route for component demos

### Local development

<details>
  <summary>📦 Trellis</summary>
  <br>

  Run `yarn && yarn build`

  Run `php .radicle-setup/trellis.php` to grab the latest version of Trellis and apply the necessary modifications for Radicle. After you've ran this script,
  navigate to the Trellis directory to init and start your project:

  ```shell
  $ php .icz-setup/trellis.php
  $ cd trellis/
  $ trellis init
  $ trellis up
  ```

  You can remove the `.radicle-setup/` directory after you've ran the Trellis script, or if you aren't planning to use Trellis.

</details>

<details>
  <summary>🐳 Lando</summary>
  <br>

  1. In `bud.config.js`: Replace `http://radicle.test` with `https://radicle.lndo.site`
  1. Run `yarn && yarn build`
  1. Run `lando start`
  1. Visit `https://radicle.lndo.site/`

  You can run `lando login` to generate a passwordless wp-admin login URL (WordPress must first be installed)

</details>

<details>
  <summary>⚙️ Other</summary>
  <br>

  1. In `bud.config.js`: Replace `http://radicle.test` with your local dev server URL
  1. Run `yarn && yarn build`
  1. Run `composer install`
  1. Configure your local development setup to set the `public/` directory as the webroot.
  1. Copy `.env.example` to `.env` and update the [environment variables](https://roots.io/bedrock/docs/installation/#getting-started)

</details>

### Deploying Radicle

<details>
  <summary>📦 Trellis</summary>
  <br>

  Want to deploy with GitHub Actions? Uncomment the deploy job from `.github/workflows/deploy.yml`.

  Otherwise, run `trellis deploy <environment>`.

</details>

<details>
  <summary>⚙️ Other</summary>
  <br>

  You will need to make sure that your deployment process handles the following:

  1. Run `yarn && yarn build` from the project root
  1. Copy contents of `public/dist/` folder to server (produced from `yarn build`)
  1. Run `wp acorn optimize`
  1. Run `wp acorn icons:cache` (if using Blade Icons)
  1. Run `wp login install --activate` (if wanting to use the WP-CLI login command)

</details>

## Places to be

| Path                            | Description                   |
|---------------------------------|-------------------------------|
| `config/post-types.php`         | Post types configuration      |
| `config/theme.php`              | Theme setup configuration     |
| `public/content/`               | `wp-content` directory        |
| `storage/logs/application.log`  | App log                       |
| `resources/scripts/editor/`     | Block editor related scripts  |
| `resources/views/`              | Theme templates               |

## Support

While we strive to help our customers in any way we can, a Radicle license doesn't cover the Roots team troubleshooting any application code issues that aren't directly related to Radicle itself.

If you discover a bug in Radicle, please make a topic on [Roots Discourse](https://discourse.roots.io/c/radicle) with minimal reproduction instructions.

If you have feature requests, questions, or feedback, please make a topic on [Roots Discourse](https://discourse.roots.io/c/radicle) or use the #radicle channel on our Discord server.
